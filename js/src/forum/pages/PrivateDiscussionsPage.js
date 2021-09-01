import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import PrivateComposing from './PrivateComposing';

export default (app) => {
    extend(IndexPage.prototype, 'navItems', (items) => {
        const user = app.session.user;

        if (user) {
            items.add(
                'privateDiscussions',
                LinkButton.component(
                    {
                        icon: app.forum.data.attributes['boybu.icon-badge'],
                        href: app.route('boybuPrivate'),
                    },
                    app.translator.trans('aravinth-boybu.forum.nav.nav_item')
                ),
                75
            );
        }
    });

    extend(IndexPage.prototype, 'setTitle', function () {
        if (app.current.get('routeName') === 'boybuPrivate') {
            app.setTitle(app.translator.trans('aravinth-boybu.forum.user.dropdown_label'));
        }
    });

    extend(DiscussionListState.prototype, 'requestParams', function (params) {
        if (app.current.get('routeName') === 'boybuPrivate') {
            params.filter.q = (params.filter.q || '') + ' is:private';

            params.include.push('recipientUsers');
            params.include.push('recipientGroups');
        }
    });

    extend(IndexPage.prototype, 'sidebarItems', function (items) {
        if (app.current.get('routeName') === 'boybuPrivate') {
            let compose = new PrivateComposing();

            items.replace('newDiscussion', compose.component());
        }
    });
};

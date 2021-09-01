import { extend } from 'flarum/common/extend';
import NotificationGrid from 'flarum/forum/components/NotificationGrid';
import PrivateDiscussionNotification from './PrivateDiscussionNotification';
import PrivateDiscussionRepliedNotification from './PrivateDiscussionReplyNotification';
import PrivateDiscussionUserLeftNotification from './PrivateDiscussionUserLeftNotification';
import PrivateDiscussionAddedNotification from './PrivateDiscussionAddedNotification';

export default function (app) {
    app.notificationComponents.boybuPrivateDiscussionCreated = PrivateDiscussionNotification;
    app.notificationComponents.boybuPrivateDiscussionReplied = PrivateDiscussionRepliedNotification;
    app.notificationComponents.boybuRecipientRemoved = PrivateDiscussionUserLeftNotification;
    app.notificationComponents.boybuPrivateDiscussionAdded = PrivateDiscussionAddedNotification;

    grid();
}

function grid() {
    // Add notification preferences.
    extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
        items.add('boybuPrivateDiscussionCreated', {
            name: 'boybuPrivateDiscussionCreated',
            icon: app.forum.data.attributes['boybu.icon-badge'],
            label: app.translator.trans('aravinth-boybu.forum.notifications.pd_label'),
        });
        items.add('boybuPrivateDiscussionReplied', {
            name: 'boybuPrivateDiscussionReplied',
            icon: app.forum.data.attributes['boybu.icon-badge'],
            label: app.translator.trans('aravinth-boybu.forum.notifications.pd_reply_label'),
        });
        items.add('boybuPrivateDiscussionAdded', {
            name: 'boybuPrivateDiscussionAdded',
            icon: app.forum.data.attributes['boybu.icon-badge'],
            label: app.translator.trans('aravinth-boybu.forum.notifications.pd_added_label'),
        });
        items.add('boybuRecipientRemoved', {
            name: 'boybuRecipientRemoved',
            icon: app.forum.data.attributes['boybu.icon-badge'],
            label: app.translator.trans('aravinth-boybu.forum.notifications.pd_user_left_label'),
        });
    });
}

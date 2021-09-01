import Notification from 'flarum/forum/components/Notification';

export default class PrivateDiscussionNotification extends Notification {
    icon() {
        return app.forum.data.attributes['boybu.icon-badge'];
    }

    href() {
        const notification = this.attrs.notification;
        const discussion = notification.subject();

        return app.route.discussion(discussion);
    }

    content() {
        const user = this.attrs.notification.fromUser();
        return app.translator.trans('aravinth-boybu.forum.notifications.pd_text', {
            user: user,
        });
    }
}

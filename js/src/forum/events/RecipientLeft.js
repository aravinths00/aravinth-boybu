import EventPost from 'flarum/forum/components/EventPost';

export default class RecipientLeft extends EventPost {
    static initAttrs(attrs) {
        super.initAttrs(attrs);
    }

    icon() {
        return app.forum.data.attributes['boybu.icon-postAction'];
    }

    descriptionKey() {
        return 'aravinth-boybu.forum.post.recipients_modified.removed_self';
    }
}

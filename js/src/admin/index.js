import User from 'flarum/core/models/User';

import addPrivateDiscussionPermission from './addPrivateDiscussionPermission';
import BoybuSettings from './components/BoybuSettingsPage';

app.initializers.add('aravinth-boybu', (app) => {

    app.store.models.recipients = User;

    app.extensionData.for('aravinth-boybu').registerPage(BoybuSettings);

    addPrivateDiscussionPermission(app);
});
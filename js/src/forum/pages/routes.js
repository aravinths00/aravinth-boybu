import IndexPage from 'flarum/forum/components/IndexPage';
import PrivateDiscussionsUserPage from './PrivateDiscussionsUserPage';

export default (app) => {
    app.routes.boybuUserPrivate = { path: '/u/:username/private', component: PrivateDiscussionsUserPage };
    app.routes.boybuPrivate = { path: '/private', component: IndexPage };
};

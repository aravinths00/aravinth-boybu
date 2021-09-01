import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Badge from 'flarum/common/components/Badge';
import icon from 'flarum/common/helpers/icon';

const {
    items: { BooleanItem, SelectItem, StringItem, NumberItem },
} = settings;

export default class BoybuSetingsPage extends ExtensionPage {
    oninit(vnode) {
        super.oninit(vnode);

        this.setting = this.setting.bind(this);

        this.badgeDefault = 'fas fa-map';
        this.postActionDefault = 'far fa-map';
    }

    content() {
        return [
            <div className="container">
                <div className="BoybuSettingsPage">
                    <div className="Form-group">
                        <label>{app.translator.trans('aravinth-boybu.admin.settings.badge-icon')}</label>
                        <StringItem name="aravinth-boybu.icon-badge" placeholder={this.badgeDefault} setting={this.setting}>
                            <Badge icon={this.setting('aravinth-boybu.icon-badge').toJSON() || this.badgeDefault}></Badge>
                        </StringItem>
                    </div>
                    <div className="Form-group">
                        <label>{app.translator.trans('aravinth-boybu.admin.settings.post-event-icon')}</label>
                        <StringItem name="aravinth-boybu.icon-postAction" placeholder={this.postActionDefault} setting={this.setting}>
                            <h2>{icon(this.setting('aravinth-boybu.icon-postAction').toJSON() || this.postActionDefault)}</h2>
                        </StringItem>
                    </div>
                    {flarum.extensions['flarum-tags'] && (
                        <p>
                            {app.translator.trans('flarum-tags.admin.edit_tag.icon_text', {
                                a: <a href="https://fontawesome.com/icons?m=free" tabindex="-1" />,
                            })}
                        </p>
                    )}
                    <div className="Form-group">{this.submitButton()}</div>
                </div>
            </div>,
        ];
    }
}
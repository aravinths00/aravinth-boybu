app.initializers.add('boybu', function(app) {

    app.extensionData
        .for('aravinth-boybu')
        .registerPermission(
            {
                icon: 'far fa-map',
                label: app.translator.trans('aravinth-boybu.admin.permission.create_private_discussions_with_users'),
                permission: 'discussion.startPrivateDiscussionWithUsers',
            },
            'start',
            95
        )
        .registerPermission(
            {
                icon: 'far fa-map',
                label: app.translator.trans('aravinth-boybu.admin.permission.create_private_discussions_with_groups'),
                permission: 'discussion.startPrivateDiscussionWithGroups',
            },
            'start',
            95
        )
        .registerPermission(
            {
                icon: 'far fa-map',
                label: app.translator.trans('aravinth-boybu.admin.permission.create_private_discussions_with_blocking_users'),
                permission: 'startPrivateDiscussionWithBlockers',
            },
            'start',
            95
        )
        .registerPermission(
            {
                icon: 'far fa-map',
                label: app.translator.trans('aravinth-boybu.admin.permission.edit_user_recipients'),
                permission: 'discussion.editUserRecipients',
            },
            'moderate',
            95
        )
        .registerPermission(
            {
                icon: 'far fa-map',
                label: app.translator.trans('aravinth-boybu.admin.permission.edit_group_recipients'),
                permission: 'discussion.editGroupRecipients',
            },
            'moderate',
            95
        )
        .registerPermission(
            {
                icon: 'fas fa-flag',
                label: app.translator.trans('aravinth-boybu.admin.permission.view_private_discussions-when-flagged'),
                permission: 'user.viewPrivateDiscussionsWhenFlagged',
            },
            'moderate',
            95
        );
});
<?php

/*
 * This file is part of fof/byobu.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->getConnection()->table('migrations')->whereExtension('flagrow-boybu')->delete();
    },
    'down' => function (Builder $schema) {
        // .. bugger off
    },
];

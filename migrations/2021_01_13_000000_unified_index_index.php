<?php

/*
 * This file is part of aravinth/boybu.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            $table->index('unified_index_with_boybu');
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            // Use array syntax so the blueprint "guesses" the full index name
            $table->dropIndex(['unified_index_with_boybu']);
        });
    },
];

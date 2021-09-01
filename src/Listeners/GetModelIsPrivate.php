<?php

/*
 * This file is part of aravinth/boybu.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Aravinth\Boybu\Listeners;

use Flarum\Discussion\Discussion;
use Aravinth\Boybu\Discussion\Screener;

class GetModelIsPrivate
{
    public function __invoke(Discussion $discussion)
    {
        /** @var Screener $screener */
        $screener = resolve('boybu.screener');
        $screener = $screener->fromDiscussion($discussion);

        // Unless we think it's private, delegate the check further
        // along the pipeline to other listeners.
        return $screener->isPrivate();
    }
}

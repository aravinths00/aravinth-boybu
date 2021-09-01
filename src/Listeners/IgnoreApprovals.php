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

use Flarum\Post\Event\Saving;
use Aravinth\Boybu\Concerns\ExtensionsDiscovery;
use Aravinth\Boybu\Discussion\Screener;

class IgnoreApprovals
{
    use ExtensionsDiscovery;

    public function handle(Saving $event)
    {
        /** @var Screener $screener */
        $screener = resolve('boybu.screener');
        $screener = $screener->fromDiscussion($event->post->discussion);

        if ($this->extensionIsEnabled('flarum-approval') && $screener->isPrivate()) {
            $event->post->is_approved = true;
        }
    }
}

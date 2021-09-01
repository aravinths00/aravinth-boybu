<?php

/*
 * This file is part of aravinth/boybu.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Aravinth\Boybu\Provider;

use Flarum\Discussion\Event\Saving;
use Flarum\Foundation\AbstractServiceProvider;
use Aravinth\Boybu\Discussion\Screener;
use Aravinth\Boybu\Listeners\DropTagsOnPrivateDiscussions;
use Aravinth\Boybu\Listeners\PersistRecipients;
use Illuminate\Events\Dispatcher;

class BoybuProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->container->bind('boybu.screener', Screener::class);
    }

    public function boot()
    {
        /** @var Dispatcher */
        $events = resolve(Dispatcher::class);

        // get the current listeners for the Discussion saving event
        $listeners = $events->getListeners(Saving::class);

        //remove current listeners
        $events->forget(Saving::class);

        // add boybu's persist recipients as the first listener, then add drop tags
        $events->listen(Saving::class, PersistRecipients::class);
        $events->listen(Saving::class, DropTagsOnPrivateDiscussions::class);

        // then re-add everything else
        foreach ($listeners as $listener) {
            $callable = function ($event, $payload = []) use ($listener) {
                return $listener($event, [$event, $payload]);
            };
            $events->listen(Saving::class, $callable);
        }
    }
}

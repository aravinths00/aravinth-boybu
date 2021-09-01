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

use Aravinth\Boybu\Events\AbstractRecipientsEvent;
use Aravinth\Boybu\Events\Created;
use Aravinth\Boybu\Events\DiscussionMadePublic;
use Aravinth\Boybu\Events\RecipientsChanged;
use Aravinth\Boybu\Events\RemovedSelf;
use Aravinth\Boybu\Posts\RecipientLeft;
use Aravinth\Boybu\Posts\RecipientsModified;
use Illuminate\Contracts\Events\Dispatcher;

class CreatePostWhenRecipientsChanged
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Created::class, [$this, 'whenDiscussionWasTagged']);
        $events->listen(DiscussionMadePublic::class, [$this, 'whenDiscussionWasTagged']);
        $events->listen(RecipientsChanged::class, [$this, 'whenDiscussionWasTagged']);
        $events->listen(RemovedSelf::class, [$this, 'whenActorRemovedSelf']);
    }

    /**
     * @param AbstractRecipientsEvent $event
     */
    public function whenDiscussionWasTagged(AbstractRecipientsEvent $event)
    {
        $post = RecipientsModified::reply($event);

        $event->discussion->mergePost($post);
    }

    public function whenActorRemovedSelf(RemovedSelf $event)
    {
        $post = RecipientLeft::reply($event);

        $event->discussion->mergePost($post);
    }
}

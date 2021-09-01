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

use Flarum\Discussion\Event\Saving;
use Flarum\Extension\ExtensionManager;
use Illuminate\Support\Arr;

class DropTagsOnPrivateDiscussions
{
    /**
     * @var ExtensionManager
     */
    protected $extensions;

    public function __construct(ExtensionManager $extensions)
    {
        $this->extensions = $extensions;
    }

    public function handle(Saving $event)
    {
        $isBoybu = Arr::exists($event->data, 'relationships.recipientUsers') || Arr::exists($event->data, 'relationships.recipientGroups');
        $hasTags = Arr::exists($event->data, 'relationships.tags.data');

        if ($isBoybu
            && $hasTags
            && $this->extensions->isEnabled('flarum-tags')
        ) {
            Arr::forget($event->data, 'relationships.tags');
        }
    }
}

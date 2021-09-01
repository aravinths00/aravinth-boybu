<?php

/*
 * This file is part of aravinth/boybu.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Aravinth\Boybu\Api;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Discussion;
use Aravinth\Boybu\Discussion\Screener;

class DiscussionDataAttributes
{
    /** @var Screener */
    private $screener;

    public function __construct(Screener $screener)
    {
        $this->screener = $screener;
    }

    /**
     * @param Flarum\Api\Serializer\UserSerializer $serializer
     * @param Flarum\Discussion\Discussion         $discussion
     * @param array                                $attributes
     *
     * @return mixed
     */
    public function __invoke(DiscussionSerializer $serializer, Discussion $model, array $attributes)
    {
        $attributes['isPrivateDiscussion'] = $this->screener->fromDiscussion($model)->isPrivate();

        return $attributes;
    }
}

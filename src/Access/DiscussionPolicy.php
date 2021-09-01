<?php

/*
 * This file is part of aravinth/boybu.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Aravinth\Boybu\Access;

use Flarum\Discussion\Discussion;
use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;
use Aravinth\Boybu\Database\RecipientsConstraint;
use Aravinth\Boybu\Discussion\Screener;

class DiscussionPolicy extends AbstractPolicy
{
    use RecipientsConstraint;

    /**
     * @param User       $actor
     * @param Discussion $discussion
     *
     * @return bool|void
     */
    public function startWithoutApproval(User $actor, Discussion $discussion)
    {
        return $this->approveIfPrivate($discussion);
    }

    /**
     * @param User       $actor
     * @param Discussion $discussion
     *
     * @return bool|void
     */
    public function replyWithoutApproval(User $actor, Discussion $discussion)
    {
        return $this->approveIfPrivate($discussion);
    }

    /**
     * @param Discussion $discussion
     *
     * @return bool|void
     */
    private function approveIfPrivate(Discussion $discussion)
    {
        return $this->isPrivate($discussion) ? $this->allow() : null;
    }

    /**
     * @param User       $actor
     * @param Discussion $discussion
     *
     * @return bool|void
     */
    public function bypassTagCounts(User $actor, Discussion $discussion)
    {
        $isBoybu = $discussion->isBoybu;

        $discussion->offsetUnset('isBoybu');

        return $isBoybu ? $this->allow() : null;
    }

    /**
     * @param User       $actor
     * @param Discussion $discussion
     *
     * @return bool|void
     */
    public function tag(User $actor, Discussion $discussion)
    {
        return $this->isPrivate($discussion) ? $this->deny() : null;
    }

    /**
     * Determine if the supplied discussion is a boybu private discussion or not.
     *
     * @param Discussion $discussion
     *
     * @return bool
     */
    private function isPrivate(Discussion $discussion): bool
    {
        /** @var Screener $screener */
        $screener = resolve('boybu.screener');
        $screener = $screener->fromDiscussion($discussion);

        return $screener->isPrivate();
    }
}

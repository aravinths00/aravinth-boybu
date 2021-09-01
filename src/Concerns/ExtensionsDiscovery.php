<?php

/*
 * This file is part of aravinth/boybu.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Aravinth\Boybu\Concerns;

use Flarum\Extension\ExtensionManager;

trait ExtensionsDiscovery
{
    /**
     * @param string $extension ; extension id (aravinth\boybu)
     *
     * @return bool
     */
    public function extensionIsEnabled(string $extension): bool
    {
        /** @var ExtensionManager $manager */
        $manager = resolve(ExtensionManager::class);

        return $manager->isEnabled($extension);
    }
}

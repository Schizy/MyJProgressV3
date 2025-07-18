<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Entity\ProgressCard;

class ProgressCardProvider implements ProviderInterface
{
    public function provide(Operation $operation, array $uriVariables = [], array $context = []): object|array|null
    {
        return [
            new ProgressCard(
                label: 'Kanji appris',
                number: '1 247'
            ),
            new ProgressCard(
                label: 'Niveau N3',
                number: '85%'
            ),
            new ProgressCard(
                label: 'Jours consécutifs',
                number: '42'
            ),
            new ProgressCard(
                label: 'Points XP',
                number: '156'
            ),
        ];
    }
}

<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Entity\FeatureCard;

class FeatureCardProvider implements ProviderInterface
{
    public function provide(Operation $operation, array $uriVariables = [], array $context = []): object|array|null
    {

        return [
            new FeatureCard(
                icon: '漢',
                title: 'Kanji Interactifs',
                description: 'Apprenez les caractères japonais avec des exercices interactifs et des mnémotechniques efficaces.'
            ),
            new FeatureCard(
                icon: '話',
                title: 'Conversation',
                description: 'Pratiquez la conversation avec des dialogues réalistes et des simulations de situations quotidiennes.'
            ),
            new FeatureCard(
                icon: '文',
                title: 'Grammaire',
                description: 'Maîtrisez la grammaire japonaise avec des leçons structurées et des exercices progressifs.'
            ),
        ];
    }
}

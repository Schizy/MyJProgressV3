<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use App\Repository\FeatureCardRepository;
use App\State\FeatureCardProvider;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FeatureCardRepository::class)]
#[ApiResource(uriTemplate:'/feature_cards')]
#[Get(provider: FeatureCardProvider::class)]
class FeatureCard
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    public ?int $id = null;

    #[ORM\Column(length: 255)]
    public ?string $icon = null;

    #[ORM\Column(length: 255)]
    public ?string $title = null;

    #[ORM\Column(length: 255)]
    public ?string $description = null;

    public function __construct(string $icon, string $title, string $description)
    {
        $this->icon = $icon;
        $this->title = $title;
        $this->description = $description;
    }
}

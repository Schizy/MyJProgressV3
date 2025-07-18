<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use App\Repository\FeatureCardRepository;
use App\State\ProgressCardProvider;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FeatureCardRepository::class)]
#[ApiResource(uriTemplate:'/progress_cards')]
#[Get(provider: ProgressCardProvider::class)]
class ProgressCard
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    public ?int $id = null;

    #[ORM\Column(length: 255)]
    public ?string $label = null;

    #[ORM\Column(length: 255)]
    public ?string $number = null;

    public function __construct(string $label, string $number)
    {
        $this->label = $label;
        $this->number = $number;
    }
}

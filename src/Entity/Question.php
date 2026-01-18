<?php
// src/Entity/Question.php

namespace App\Entity;

use App\Repository\QuestionRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\DBAL\Types\Types;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
class Question
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private string $label;

    #[ORM\Column(type: Types::TEXT)]
    private string $answer;

    #[ORM\ManyToOne(inversedBy: 'questions')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private Subject $subject;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = trim($label);
        return $this;
    }

    public function getAnswer(): string
    {
        return $this->answer;
    }

    public function setAnswer(string $answer): static
    {
        $this->answer = trim($answer);
        return $this;
    }

    public function getSubject(): Subject
    {
        return $this->subject;
    }

    public function setSubject(Subject $subject): static
    {
        $this->subject = $subject;
        return $this;
    }
}

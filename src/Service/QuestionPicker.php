<?php
// src/Service/QuestionPicker.php
namespace App\Service;

use App\Entity\Question;
use App\Repository\QuestionRepository;

class QuestionPicker
{
    public function __construct(
        private QuestionRepository $questionRepository
    ) {}

    /**
     * Récupère une question aléatoire parmi les sujets sélectionnés
     *
     * @param int[] $subjectIds
     * @return Question|null
     */
    public function pickRandom(array $subjectIds): ?Question
    {
        return $this->questionRepository
            ->findRandomBySubjects($subjectIds);
    }
}

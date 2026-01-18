<?php
// src/Service/DataService.php

namespace App\Service;

class DataService
{
    private string $dataPath;

    public function __construct(string $dataPath)
    {
        $this->dataPath = $dataPath;
    }

    public function getSubjects(): array
    {
        // $file = $this->dataPath . '/subjects.json';
        $file = "https://skill-drills-production.up.railway.app/data/subjects.json";
        dd($file);
        return json_decode(file_get_contents($file), true);
    }

    public function getQuestions(): array
    {
        $file = $this->dataPath . '/questions.json';
        return json_decode(file_get_contents($file), true);
    }

    public function getRandomQuestion(array $subjectIds = []): ?array
    {
        $questions = $this->getQuestions();
        $subjects  = $this->getSubjects();

        // Création d'une map subjectId => subjectName
        $subjectMap = [];
        foreach ($subjects as $subject) {
            $subjectMap[$subject['id']] = $subject['name'];
        }

        if (!empty($subjectIds)) {
            $questions = array_filter($questions, fn($q) => in_array($q['subjectId'], $subjectIds));
        }

        if (empty($questions)) {
            return null;
        }

        $question = $questions[array_rand($questions)];

        // Ajout du nom du subject
        $question['subjectName'] = $subjectMap[$question['subjectId']] ?? null;

        return $question;
    }
}

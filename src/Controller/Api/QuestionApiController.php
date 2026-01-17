<?php
// src/Controller/Api/QuestionApiController.php
namespace App\Controller\Api;

use App\Repository\SubjectRepository;
use App\Service\QuestionPicker;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api')]
class QuestionApiController extends AbstractController
{
    public function __construct(
        private SubjectRepository $subjectRepository,
        private QuestionPicker $questionPicker
    ) {}

    /**
     * Liste toutes les matières
     */
    #[Route('/subjects', name: 'api_subjects', methods: ['GET'])]
    public function subjects(): JsonResponse
    {
        $subjects = $this->subjectRepository->findAllOrderedByName();

        $data = array_map(fn($s) => [
            'id' => $s->getId(),
            'name' => $s->getName(),
        ], $subjects);

        return $this->json($data);
    }

    /**
     * Question aléatoire filtrée par matières
     * GET /api/questions/random?subjects[]=1&subjects[]=3
     */
    #[Route('/questions/random', name: 'api_question_random', methods: ['GET'])]
    public function random(Request $request): JsonResponse
    {
        $subjectIds = $request->query->all('subjects');

        // Convertir en entiers propres
        $subjectIds = array_map('intval', $subjectIds);

        $question = $this->questionPicker->pickRandom($subjectIds);

        if (!$question) {
            return $this->json(['message' => 'Aucune question trouvée'], 404);
        }

        $data = [
            'id' => $question->getId(),
            'label' => $question->getLabel(),
            'answer' => $question->getAnswer(),
            'subject' => [
                'id' => $question->getSubject()->getId(),
                'name' => $question->getSubject()->getName(),
            ],
        ];

        return $this->json($data);
    }
}

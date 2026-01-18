<?php
// src/Controller/Api/QuestionApiController.php
namespace App\Controller\Api;

use App\Service\DataService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api')]
class QuestionApiController extends AbstractController
{
    public function __construct(
        private DataService $dataService
    ) {}

    #[Route('/subjects', name: 'api_subjects', methods: ['GET'])]
    public function subjects(): JsonResponse
    {
        dd('la');
        return $this->json($this->dataService->getSubjects());
    }

    #[Route('/questions/random', name: 'api_random_question', methods: ['GET'])]
    public function randomQuestion(Request $request): JsonResponse
    {
        $subjectIds = $request->query->all('subjects');

        return $this->json($this->dataService->getRandomQuestion($subjectIds));
    }
}

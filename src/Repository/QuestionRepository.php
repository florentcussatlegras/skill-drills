<?php
// src/Repository/QuestionRepository.php
namespace App\Repository;

use App\Entity\Question;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Question::class);
    }

    /**
     * Récupère une question aléatoire filtrée par les matières passées
     *
     * @param int[] $subjectIds
     * @return Question|null
     */
    public function findRandomBySubjects(array $subjectIds): ?Question
    {
        if (empty($subjectIds)) {
            return null;
        }

        $questions = $this->createQueryBuilder('q')
            ->innerJoin('q.subject', 's')
            ->andWhere('s.id IN (:ids)')
            ->setParameter('ids', $subjectIds)
            ->getQuery()
            ->getResult();

        if (empty($questions)) {
            return null;
        }

        // Choix aléatoire côté PHP
        return $questions[array_rand($questions)];
    }
}

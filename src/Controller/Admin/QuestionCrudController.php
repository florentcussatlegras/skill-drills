<?php

namespace App\Controller\Admin;

use App\Entity\Question;
use App\Entity\Subject;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class QuestionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Question::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),   // L’ID n’apparaît que sur la liste
            TextEditorField::new('label', 'Question'),  // Label de la question
            TextEditorField::new('answer', 'Réponse'),  // Text area pour la réponse
            AssociationField::new('subject', 'Matière')  // Select pour choisir le Subject
                ->setRequired(true)
        ];
    }
}

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260118093802 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE question (id INT AUTO_INCREMENT NOT NULL, label LONGTEXT NOT NULL, answer LONGTEXT NOT NULL, subject_id INT NOT NULL, INDEX IDX_B6F7494E23EDC87 (subject_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE TABLE subject (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, UNIQUE INDEX UNIQ_FBCE3E7A5E237E06 (name), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494E23EDC87 FOREIGN KEY (subject_id) REFERENCES subject (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494E23EDC87');
        $this->addSql('DROP TABLE question');
        $this->addSql('DROP TABLE subject');
    }
}

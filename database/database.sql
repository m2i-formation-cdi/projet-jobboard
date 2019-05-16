SET foreign_key_checks = 0;

DROP DATABASE IF EXISTS jobboard;

CREATE DATABASE jobboard DEFAULT CHARACTER SET utf8 
COLLATE utf8_general_ci;

USE jobboard;

CREATE TABLE candidats(
   id INT UNSIGNED AUTO_INCREMENT,
   nom VARCHAR(30) NOT NULL,
   prenom VARCHAR(30) NOT NULL,
   mdp VARCHAR(45) NOT NULL,
   email VARCHAR(30) NOT NULL,
   adresse VARCHAR(38) NOT NULL,
   code_postal CHAR(5) NOT NULL,
   ville VARCHAR(30) NOT NULL,
   telephone CHAR(10),
   titre VARCHAR(80) NOT NULL,
   id_genre TINYINT UNSIGNED NOT NULL,
   PRIMARY KEY(id),
   CONSTRAINT candidats_to_genres
      FOREIGN KEY (id_genre)
      REFERENCES genres(id)
);

CREATE TABLE genres(
   id TINYINT UNSIGNED AUTO_INCREMENT,
   libelle VARCHAR(20) NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE curriculum_vitae(
   id INT UNSIGNED AUTO_INCREMENT,
   content BLOB NOT NULL,
   id_candidat INT UNSIGNED,
   PRIMARY KEY(id),
   CONSTRAINT cv_to_candidat
      FOREIGN KEY (id_candidat)
      REFERENCES candidats(id)
   
);

CREATE TABLE entreprises(
   id INT UNSIGNED AUTO_INCREMENT,
   raison_sociale VARCHAR(50) NOT NULL,
   mdp VARCHAR(45) NOT NULL,
   email VARCHAR(30) NOT NULL,
   adresse VARCHAR(38) NOT NULL,
   code_postal CHAR(5) NOT NULL,
   ville VARCHAR(30) NOT NULL,
   telephone CHAR(10),
   siret CHAR(14) NOT NULL,
   id_secteur TINYINT UNSIGNED NOT NULL,
   PRIMARY KEY(id),
   CONSTRAINT enterprises_to_secteur
      FOREIGN KEY (id_secteur)
      REFERENCES secteurs(id)
);

CREATE TABLE secteurs(
   id TINYINT UNSIGNED AUTO_INCREMENT,
   libelle VARCHAR(20) NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE annonces(
   id INT UNSIGNED AUTO_INCREMENT,
   date_annonce DATE NOT NULL,
   titre VARCHAR(50) NOT NULL,
   description_annonce TEXT NOT NULL,
   id_entreprise INT UNSIGNED NOT NULL,
   id_profession SMALLINT UNSIGNED NOT NULL,
   id_type_contrat TINYINT UNSIGNED NOT NULL,
   salaire_min MEDIUMINT UNSIGNED NOT NULL,
   salaire_max MEDIUMINT UNSIGNED NOT NULL,
   PRIMARY KEY(id),
   CONSTRAINT annonces_to_type_contrat
      FOREIGN KEY (id_type_contrat)
      REFERENCES types_contrats(id),
   CONSTRAINT annonces_to_profession
      FOREIGN KEY (id_profession)
      REFERENCES professions(id),
   CONSTRAINT annonces_to_entreprise
      FOREIGN KEY (id_entreprise)
      REFERENCES entrepises(id)
);

CREATE TABLE professions(
   id SMALLINT UNSIGNED AUTO_INCREMENT,
   libelle VARCHAR(20) NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE types_contrats(
   id TINYINT UNSIGNED AUTO_INCREMENT,
   libelle VARCHAR(20) NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE candidatures(
   id INT UNSIGNED AUTO_INCREMENT,
   date_candidature DATE NOT NULL,
   id_candidat INT UNSIGNED NOT NULL,
   id_annonce INT UNSIGNED NOT NULL,
   lettre_motivation BLOB NOT NULL,
   id_cv INT UNSIGNED, 
   PRIMARY KEY(id),
   CONSTRAINT candidature_to_annonce
      FOREIGN KEY (id_annonce)
      REFERENCES annonces(id),
   CONSTRAINT candidature_to_candidat
      FOREIGN KEY (id_candidat)
      REFERENCES candidats(id),
   CONSTRAINT candidature_to_cv
      FOREIGN KEY (id_cv)
      REFERENCES curriculum_vitae(id)
);

CREATE TABLE mots_clefs(
   id_annonce INT UNSIGNED,
   mot_clef VARCHAR(50) NOT NULL,
   
   PRIMARY KEY(id_annonce, mot_clef),
   CONSTRAINT mot_clef_to_annonce
      FOREIGN KEY (id_annonce)
      REFERENCES annonces(id)
);

SET foreign_key_checks = 1;
SET foreign_key_checks = 0;

TRUNCATE secteurs;

insert into secteurs
    (libelle)
values
    ("Batiment"),
    ("Commerce"),
    ("Agroalimentaire"),
    ("Informatique"),
    ("Edition"),
    ("Automobile")
;

TRUNCATE entreprises;

insert into entreprises
    ( raison_sociale, mdp, email, adresse, code_postal, ville, telephone, siret, id_secteur)
values
    ("Renault SAS", "123", "Renault@Renault.com", "13/15 Quai Alphonse le Gallo", "92100", "Boulogne", "0102030405", "12345678910112", "6"),
    ("Mercier & Cie", "123", "MercierCie@MercierCie.com", "3 rue delaroute", "75012", "Paris", "0106070809", "12345678910113", "3"),
    ("Fnac", "123", "Pictet@fnac.com", "4 rue delaroute", "92100", "Boulogne", "0110111213", "12345678910114", "2"),
    ("Pernet & Associés", "123", "PernetAssociés@PernetAssociés.com", "4 private drive", "92100", "Boulogne", "0114151617", "12345678910115", "1"),
    ("Cheynet & Fils", "123", "CheynetFils@CheynetFils.com", "221 b Baker Street", "75011", "Paris", "0118192021", "12345678910116", "4")
;

TRUNCATE types_contrats;

insert into types_contrats
    (libelle)
VALUES
    ('CDI'),
    ('CDD'),
    ('Stage'),
    ('Alternance')
;

TRUNCATE professions;

insert into professions
    (libelle)
VALUES
    ('Developpeur'),
    ('Peintre'),
    ('Vendeur'),
    ('Ouvrier'),
    ("Chef d'entreprise"),
    ("Mecanicien")
;

TRUNCATE annonces;

insert into annonces
    (date_annonce, titre, description_annonce , id_entreprise, id_profession, id_type_contrat, salaire_min, salaire_max)
values
    ("2019-1-1", "Developpeur full-stack / dev-ops", "Sous la responsabilité du directeur technique et en collaboration avec l’équipe de développement, vous serez en charge de la conception et du développement des outils Vinium (CMS, Stack front-end, APIs, dev-ops).", "5", '1', '1', '2000', '3000'),
    ("2019-2-1", "Peintre en bâtiment", "Recherche peintre en bâtiment expérimenté, ponctuel, sérieux.", "4", '2', '2', '1500', '2000'),
    ("2019-3-1", "Vendeur-Technicien Smartphones", "vendeur-technicien efficace sur le point de vente situé au sein de la Fnac", "3", "3", "1", "1100", "1300")
;

TRUNCATE candidats;

insert into candidats
    (nom,prenom, mdp, email, adresse, code_postal, ville, telephone, titre, id_genre)
VALUES
    ("Pierre", "Jean", "123", "pierre.jean@gmail.com", "10 rue picpus", "75011", "Paris", "0605040302", "Développeur back-end", "1"),
    ("Pinot", "Paulette", "123", "pinot.paulette@gmail.com", "154 rue de la convention", "75015", "Paris", "0605040320", "Vendeuse produit-technique", "2"),
    ("John", "Jacques", "123", "john.jacques@gmail.com", "50 boulevard Jean Jaures", "92100", "Boulogne", "0605043050", "Mecanicien automobile", "3")
;

TRUNCATE mots_clefs;

insert into mots_clefs
    (id_annonce, mot_clef)
VALUES
    ("1", "developpeur"),
    ("2", "peintre"),
    ("3", "vendeur")
;

TRUNCATE genres;

insert into genres
    (libelle)
VALUES
    ("Masculin"),
    ("Feminin"),
    ("Mixte")
;

TRUNCATE candidatures;

insert into candidatures
    ( date_candidature, id_candidat, id_entreprise, lettre_motivation, id_cv)
values
    ("2019-5-14", 1, 1, "Je suis motivé", 1),
    ("2019-5-10", 2, 1, "Je suis plus motivé", 1),
    ("2019-5-05", 3, 1, "Je suis pas motivé", 1),
    ("2019-5-14", 1, 2, "Je suis motivé", 1),
    ("2019-5-10", 1, 2, "Je suis trop motivé", 1)
;

SET foreign_key_checks = 1;
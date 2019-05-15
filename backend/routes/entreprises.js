const express = require('express');

const db = require('../shared/database');

const router = express.Router();

router.post('/new', (req, res) => {
   //Création de la commande SQL d'insertion
   const sql = "INSERT INTO entreprises SET ?";
   //Récupération des infos nécessaire pour l'insert
   const insertEntrepriseData = {
      raison_social: req.body.raison_social,
      mdp: req.body.mdp,
      email: req.body.email,
      adresse: req.body.adresse,
      code_postal: req.body.code_postal,
      ville: req.body.ville,
      telephone: req.body.telephone,
      siret: req.body.siret,
      id_secteur: req.body.id_secteur
   };
   //Lancer la requêt à la base de données
   db.query(
      sql,
      insertEntrepriseData,
      (err) => {
         //Gestion de la réponse
         if (err) {
            res.json({ error: err });
         } else {
            res.json({ insert: OK });
         }
      });

});




module.exports = router;
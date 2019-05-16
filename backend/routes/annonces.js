const express = require('express');

const db = require('../shared/database');

const router = express.Router();

router.get('/search', (req, res) => {
   res.json({ ok: true });
});

router.post('/candidature', (req, res) => {
   res.json({ ok: true });
});

router.post('/new', (req, res) => {
   //Création de la commande SQL d'insertion
   const sql = "INSERT INTO annonces SET ?";
   //Récupération des infos nécessaire pour l'insert
   const insertAnnonceData = {
      date_annonce: req.body.date_annonce,
      titre: req.body.titre,
      description_annonce: req.body.description_annonce,
      id_entreprise: req.body.id_entreprise,
      id_profession: req.body.id_profession,
      type_contrat: req.body.type_contrat,
      salaire_min: req.body.salaire_min,
      salaire_max: req.body.salaire_max
   };
   //Lancer la requêt à la base de données
   db.query(
      sql,
      insertAnnonceData,
      (err) => {
         //Gestion de la réponse
         if (err) {
            res.json({ error: err });
         } else {

            res.json({ insert: "OK" });
         }
      });
});


module.exports = router;
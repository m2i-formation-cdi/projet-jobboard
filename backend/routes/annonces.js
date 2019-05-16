const express = require('express');

const db = require('../shared/database');

const router = express.Router();

router.get('/search', (req, res) => {
  
      //Création de la commande SQL d'insertion
  //     const sqlSelectOne = 'SELECT * FROM annonces WHERE id = ?';
    
  //     //Récupération des infos nécessaire pour l'insert
  //    const selectAnnonceById = {
  //      id: req.body.id
  //    };
  
  // //Lancer la requêt à la base de données
  // db.query(
  //    sqlSelectOne,
  //    selectAnnonceById,
  //    (err) => {
  //       //Gestion de la réponse
  //       if (err) {
  //          res.json({ error: err });
  //       } else {
  //          res.json({ insert: OK });
  //       }
  //    });
  
  });


router.post('/candidature', (req, res) => {
  
   const { id } = req.params;
   //Création de la commande SQL d'insertion
   const sql = "INSERT INTO candidatures SET ?";
   //Récupération des infos nécessaire pour l'insert
   const insertCandidatureData = {
      
   date_candidature: req.body.date_candidature,
   id_candidat: req.body.id_candidat,
   id_annonce:req.body.id_annonce,
   lettre_motivation: req.body.lettre_motivation,
   id_cv: req.body.id_cv

   };
   //Lancer la requêt à la base de données
   db.query(
      sql,
      insertCandidatureData,
      (err) => {
         //Gestion de la réponse
         if (err) {
            res.json({ error: err });
         } else {
            res.json({ insert: OK });
         }
      });

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


router.get('/liste', (req, res) => {
   const sql = "SELECT * FROM annonces";
   db.query(sql, (err, data) => {
      if (err) {
         res.json({ error: err });
      } else {
         res.json({ secteur: data });
      }
   })
});



router.post('/new', (req, res) => {
   res.json({ok: true});
});


module.exports = router;
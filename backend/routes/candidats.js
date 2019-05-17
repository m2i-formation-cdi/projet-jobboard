
const express = require('express');
const mysql = require('mysql');
 
const db = require('../shared/database');

const router = express.Router();

router.post('/new', (req, res) => {
   
   let insertSql = "INSERT INTO candidats (nom, prenom, mdp, email, adresse, code_postal,ville, telephone, titre, id_genre) VALUES (?,?,?,?,?,?,?,?,?,?)";

   let candidat = [
       nom = req.body.nom,
       prenom = req.body.prenom,
       mdp = req.body.mdp,
       email = req.body.email,
       adresse = req.body.adresse,
       code_postal = req.body.code_postal,
       ville = req.body.ville,    
       telephone = req.body.telephone,
       titre = req.body.titre,
       id_genre = req.body.id_genre
   ];

   let query = mysql.format(insertSql, candidat);
   db.query(query, (err, response) => {
       if(err){
          console.log(err);
          res.json({success: false, data: err});
       }
       console.log(response.insertId);
       res.json({success: true, data: response});
   });
  // res.json({ok: true});
});

router.post('/cv/new', (req, res) => {
   res.json({ok: true});
});

router.post('/alert/new', (req, res) => {
   res.json({ok: true});
});


module.exports = router;
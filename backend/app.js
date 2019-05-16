//Importation des modules requis
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');

const db = require('./shared/database');

//Importation des routes
const routesCandidats = require('./routes/candidats');
const routesEntreprises = require('./routes/entreprises');
const routesAnnonces = require('./routes/annonces');
const routesCandidatures = require('./routes/candidatures');

//Initialisation de l'application Express
const app = express();

//Déclaration des middlewares

//Gestion des données postées
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Gestion des CORS (Cross Origin Ressource Sharing)
//Pour autoriser les connexions provenant d'autre domaines
app.use(cors());

/**
 * Hashage du mot de passe
 */
app.use( (req, res, next)=> {
 if(req.body.mdp){
    req.body.mdp = crypto.createHash('sha1')
                     .update(req.body.mdp)
                     .digest('hex');
 }
 next();
});

/**
 * Requête afin de trouver 
 */
app.use('/login', (req, res, next)=> {
   let sql;
   if(req.body.candidat){
      sql = "SELECT * FROM candidats";
   } else {
      sql = "SELECT * FROM entreprises";
   }

   sql += " WHERE email=? AND mdp= ?";

   const params = {
      email: req.body.email,
      password: req.body.password
   };

   db.query(sql, params, (err, data)=> {
      if(err){
         res.json({success: false, error: err});
      } else {
         req.user = data;
         next();
      }
   });
});

app.post('/login', (req, res) => {
   if(req.user && req.user.length >0){
      res.json({success: true, data: user});
   } else {
      res.json({success: false, error: "Infos d'authentification incorrectes"});
   }
});

//Déclaration des routes
app.use('/candidat', routesCandidats);
app.use('/entreprise', routesEntreprises);
app.use('/annonce', routesAnnonces);
app.use('/', routesCandidatures);

//Lancement de l'application
app.listen(3000);


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
   if(req.body.status == 'candidat'){
      sql = "SELECT * FROM candidats";
      req.role = 'candidat';
   } else {
      sql = "SELECT * FROM entreprises";
      req.role = 'entreprise';
   }

   sql += " WHERE email=? AND mdp= ?";

   const params = [
      req.body.email,
      req.body.mdp
   ];

   console.log(sql);

   console.log(params);

   db.query(sql, params, (err, data)=> {
      if(err){
         res.json({success: false, error: err});
      } else {
         req.user = data;
         console.log(data);
         next();
      }
   });
});

app.post('/login', (req, res) => {
   if(req.user && req.user.length >0){
      let user = req.user[0];
      user.role = req.role;
      res.json({success: true, user: req.user[0]});
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


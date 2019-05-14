//Importation des modules requis
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importation des routes
const routesCandidats = require('./routes/candidats');

//Initialisation de l'application Express
const app = express();

//Déclaration des middlewares

//Gestion des données postées
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Gestion des CORS (Cross Origin Ressource Sharing)
//Pour autoriser les connexions provenant d'autre domaines
app.use(cors());

//Déclaration des routes
app.use('/candidat', routesCandidats);

//Lancement de l'application
app.listen(3000);


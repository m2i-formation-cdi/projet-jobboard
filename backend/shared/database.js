//Importation du module mysql
const mysql = require('mysql');

//Création d'une connection
const connection = mysql.createConnection(
   {
      host: '172.26.12.134',
      user: 'root',
      password: '123'
   }
);


//Activation de la base de données
 connection.query('USE jobboard');

//Exportation du module de connection
module.exports = connection;
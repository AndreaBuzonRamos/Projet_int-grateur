// Point d'entrée de l'application
const app = require('./app');
require('dotenv').config();


var cors = require('cors')

 
app.use(cors())


// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

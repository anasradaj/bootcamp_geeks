require('dotenv').config(); // Load environment variables from .env file
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000; 

app.get('/', (req, res) => {
    res.send('Le serveur backend est en marche !');
});

app.listen(PORT, () => {
    console.log(`Serveur backend démarré sur le port ${PORT}`);
});
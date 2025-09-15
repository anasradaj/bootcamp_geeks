const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config(); 
const connectDB = require('./config/db');
const authRoutes = require('./auth');
const authenticateJWT = require('./authMiddleware');

connectDB();

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(cookieParser()); 

app.get('/', (req, res) => {
  res.send('Serveur d\'authentification JWT fonctionnel !');
});

app.use('/auth', authRoutes);

app.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: `Bienvenue sur votre profil, ${req.user.username}!` });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
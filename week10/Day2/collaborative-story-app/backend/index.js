require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

app.use('/api/auth', authRoutes); 

app.listen(PORT, () => {
    console.log(`Backend server started on port ${PORT}`);
});

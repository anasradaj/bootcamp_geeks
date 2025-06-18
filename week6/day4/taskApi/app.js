const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));



app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.use('/', routes);

const port = 3000;
app.listen(port, () => {
    console.log('Task API server running at http://localhost:' + port);
})

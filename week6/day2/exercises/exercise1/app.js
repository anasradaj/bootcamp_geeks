const express = require('express');
const indexRouter = require('./routes/index.js');
const app = express();
const port = 3000;

app.use('/', indexRouter);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const indexRouter = require('./routes/todos.js');
const port = 3000;

const app = express();
app.use(express.json());
app.use('/', indexRouter);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

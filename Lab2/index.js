//Isabella Enriquez Lab 2
const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

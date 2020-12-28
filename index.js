const express = require('express');
const app = express();
const port = 3000;

const routerFile = require('./router');

app.use('/', routerFile);

app.listen(port);
const express = require('express');
const app = express();
const port = 3000;

const routerFile = require('./router');

// app.get('/', (req, res) => {
//     res.send('Boussus Samuel');
// })

// app.use((request, response, next) => {
//     console.log()
//     next()
// })

app.use('/', routerFile);

app.listen(port);
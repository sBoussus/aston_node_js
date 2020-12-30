const express = require('express');
const bodyParser = require('body-parser');
const orders = require('./routes/orders');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;

/** Connexion à MongoDB */
mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))

/** CORS */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

/** Logs en console */
app.use(function timeLog(req, res, next) {
    let currentTime = Date.now();
    console.log('Time: ', currentTime);
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('Url: ', fullUrl);
    next();
})

/** Page d'accueil */
app.get('/', (req, res) => {
    res.status(200).send('Boussus Samuel');
})

/** Page orders */
app.use('/orders', orders);

/** Message d'erreur 404 */
app.use((req, res, next) => {
    res.status(404).send('Page not found');
    });

/** Écoute du port */
app.listen(port, () => {
    console.log(`Node app listening at http://localhost:${port}`);
});
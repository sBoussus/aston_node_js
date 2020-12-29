const express = require('express');
const app = express();
const port = 3000;
const orders = require('./routes/orders');
const mongoose = require('mongoose');

/** Connexion à MongoDB */
mongoose.connect('mongodb+srv://beta_user:FYGc84SBefyVNYec@cluster0.h9zzk.mongodb.net/<dbname>?retryWrites=true&w=majority', {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))

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
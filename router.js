const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.use(function timeLog(req, res, next) {
    let currentTime = Date.now();
    console.log('Time: ', currentTime);
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('Url: ', fullUrl);
    next();
})

router.get('/', (req, res) => {
    res.send('Boussus Samuel');
})

router.route('/orders')
    .get((req, res) => {
        res.send('Voici la liste des orders')
    })
    .post((req, res) => {
        res.send(`Order d'id ${uuidv4()} créée`)
    })

router.route('/orders/[0-9]+/')
    .get((req, res) => {
        let id = req.originalUrl.split('/')[2];
        res.send(`Voici l'order d'id ${id}`);
    })
    .put((req, res) => {
        let id = req.originalUrl.split('/')[2];
        res.send(`Order d'id ${id} mis à jour`);
    })
    .delete((req, res) => {
        let id = req.originalUrl.split('/')[2];
        res.send(`Order d'id ${id} supprimée`);
    })

module.exports = router;
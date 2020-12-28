const express = require('express');
const router = express.Router();

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

module.exports = router;
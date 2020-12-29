const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

/** CRUD sur la route '/orders' */
router.route('/')
    .get((req, res) => {
        if(req.query.name) {
            res.status(200).send('Le paramètre name a été renseigné.');
        } else {
            res.status(200).send('Voici la liste des orders');
        };
    })
    .post((req, res) => {
        res.status(201).send(`Order d'id ${uuidv4()} créée`)
    })

/** CRUD sur la route '/orders/id' */
router.route('/:id')
    .get((req, res) => {
        let id = req.params.id;
        res.status(200).send(`Voici l'order d'id ${id}`);
    })
    .put((req, res) => {
        let id = req.params.id;
        res.status(200).send(`Order d'id ${id} mis à jour`);
    })
    .delete((req, res) => {
        let id = req.params.id;
        res.status(204).send(`Order d'id ${id} supprimée`);
    })

/** Export du module */
module.exports = router;
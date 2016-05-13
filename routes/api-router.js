'use strict'
const express = require('express');
const router = express.Router();

const politicoController = require('../controllers/Politico-Controller');

router.get('/all', (req, res) => {
    politicoController.retrive(res,{});
    // politicoModel.find(function (err, politicos) {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(politicos);
    // });
});

router.get('*', function (req, res) {
    let options = {
        root: process.cwd() + '/public',
    };
    res.sendFile('index.html', options);
});

module.exports = router;

'use strict'

require('./config/database');

const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

const apiRouter = require('./routes/api-router');
app.use('/api', apiRouter);

const port = 3000;
app.listen(port, () => console.log('Aplicação rodando na porta ' + port));
'use strict';

const mongoose = require('mongoose');

const nome = require('../fields/field-nome');
const partido = require('../fields/field-nome');
const estado = require('../fields/field-nome');
const totalOcorrencias = require('../fields/field-nome');
const resumo = require('../fields/field-nome');
const dataAtualizacao = require('../fields/field-nome');


const _schema = {
	nome,
	partido,
	estado,
	totalOcorrencias,
	resumo,
	dataAtualizacao
};

module.exports = new mongoose.Schema(_schema);

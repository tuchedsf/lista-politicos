'use strict'
const mongoose = require('mongoose');

//definição do schema banco
const schema = new mongoose.Schema({
	//qtde : { type: Number, default: 0},
	nome : String,
	partido : String,
	estado : String,
	totalOcorrencias : { type: Number, default: 0},
	resumo : String,
	dataAtualizacao : String
});

module.exports = mongoose.model('Politico', schema);

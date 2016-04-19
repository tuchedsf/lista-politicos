//Politico.js

//Definição do schema 

//importando o mongoose
var mongoose = require('mongoose');

//definição do schema banco
var PoliticoSchema = new mongoose.Schema({
	qtde : { type: Number, default: 0},
	deputado : String,
	sigla : String,
	uf : String,
	ocorrencia : { type: Number, default: 0},
	resumo : String,
	dataAtualizacao : String
});

//definicao que politico ira usar PolicitoSchema
mongoose.model('Politico',PoliticoSchema);

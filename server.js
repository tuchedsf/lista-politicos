//server.js

//=======================inicializando dependencias
//importanto xpress
var express = require('express');
//criar app utilizando o express
var app = express();
//instanciar o mongoose para utilizar com o mongoDB
var mongoose = require('mongoose');
//instanciar biblioteca de log
var logger = require('morgan');
//instanciar biblioteca para pegar as informacoes por post do html+express
var bodyParser = require('body-parser');
//instanciar metodo que simule os metodos DELETE e PUT do REST
//com esta metdo de acordo com o parmetro passado o servidor entende qual requisicao foi efetuada.
var methodOverride = require('method-override');

//=======================inicialinando utilizacao mongoDB
//conectando ao mongoDB
mongoose.connect('mongodb://localhost/politico');
//carregar arquivo model
require('./models/Politico.js');


//=======================definicao da aplicação
//definicao do local onde ficarao os arquivos publicos da aplicacao
app.use(express.static(__dirname + '/public'));
//habilitando o log no console
app.use(logger('dev'));
//realizar o parse da url com bodyParser
app.use(bodyParser.urlencoded({'extended':'true'}));
//habilitar o parse para json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

//=======================ROTAS
//realizar apontamento para o arquivo onde serao definidas as ROTAS
var index = require('./routes/index');
//definir a rota principal da aplicacao
app.use('/',index);

//======================= LISTEN servidor
//definir a porta padrao a ser utilizada
app.listen(8080);
//Imprimir mensagem no console para saber que esta ok
console.log("Aplicação executada na porta 8080");

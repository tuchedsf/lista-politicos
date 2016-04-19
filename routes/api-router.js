'use strict'
const express = require('express');
const router = express.Router();
const politicoModel = require('../models/politico');

router.get('/byName', (req, res) => {
    let name = req.query.nome,
        regExp = new RegExp(name, 'i');
    politicoModel.find({ nome: regExp }, (err, politicos) => {
        if (err) {
            res.send(err);
        }
        res.json(politicos);
    });
});

router.get('/all', (req, res) => {
    politicoModel.find(function (err, politicos) {
        if (err) {
            res.send(err);
        }
        res.json(politicos);
    });
});

router.get('/politicos/atualizar', function (req, res) {
    politicoModel.find(function (err, politicos) {
        if (err) {
            res.send(err);
        }
        res.json(politicos);
    });
});

router.get('*', function (req, res) {
    let options = {
        root: process.cwd() + '/public',
    };
    res.sendFile('index.html', options);
});


/*
//ROTA CRIAR
router.post('/api/contatos',function(req, res){
  //cria um contato com as requisicoes enviadas
  Contato.create({
    nome : req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    done: false
  }, function(err, contato){
    if (err)
         res.send(err);
     // Busca novamente todos os contatos após termos inserido um novo registro
     Contato.find(function(err, contatos) {
         if (err)
             res.send(err)
         res.json(contatos);
       });
  });
});

//ROTA DELETAR
router.delete('/api/contatos/:contato_id', function(req,res){
  //Remover o contato do banco
  Contato.remove({
    _id : req.params.contato_id
  },function(err, contatos){
    if (err)
     res.send(err);
     // Busca novamente todos os contatos após termos inserido um novo registro
     Contato.find(function(err, contatos) {
         if (err)
             res.send(err)
         res.json(contatos);
       });
  });
});

//ROTA EDITAR
router.get('/api/contatos/:contato_id', function(req,res){
  //busca contato a ser editado
  Contato.findOne({
       _id : req.params.contato_id
   }, function(err, contato) {
       if (err)
          res.send(err);
       res.json(contato);
   });
});

//ROTA ATUALIZAR
router.put('/api/contatos/:contato_id', function(req, res) {
    // Busca o contato no Model pelo parâmetro id
    var contatoData = req.body;
    var id = req.params.contato_id;

    Contato.update(
        {_id: id },
        contatoData,
        { upsert: true},
        function(err, contato) {
            if (err) res.send(err);
            res.json(contato);
    });

});
*/

module.exports = router;

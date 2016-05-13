'use strict';
// aposntamento para o arquivo com a definição do schema
const PoliticoSchema = require('../models/schema/Politico-schema');
const Model = require('../models/Model')('Politico',PoliticoSchema);
//const crudPolitico = require('../controller/CRUD')(Model);
const error = require('../util/func_error');
const success = require('../util/func_success');

const CRUD = {
	// create : function (data) {
	// 	Model.create(data).then(success , error);
	// },
	retrive : function (res, query) {
		//const query = {$and :[{attack : 40}, {defense : 40}]}
		Model.find(query, function (err, politicos) {
	        if (err) {
	             res.send(err);
	         }
	         res.json(politicos);
	    });
	},
	// update : function (query,mod, options) {
	// 	//const queryUpdate = {"_id" : "572f4a42cf4c206bfcaa7480"}
	// 	//const mod = {name: "Poke Promise", defense : 50}
	// 	options = options || {} //{ multi: true }
	// 	let promise = Model.update(query,mod, options).exec();
	// 	promise.then(success, error);
	// },
	// delete : function (query) {
	// 				//const queryDelete = {"_id" : "572f4a42cf4c206bfcaa7480"}

	// 		Model.remove(query).then(success , error);
	// }
}
module.exports = CRUD;



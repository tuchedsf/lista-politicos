'use strict';

module.exports = function(ModelName,Schema ) {
	const mongoose = require('mongoose');
	return  mongoose.model(ModelName, Schema);
}
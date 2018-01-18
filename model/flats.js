'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlatsSchema = new Schema({
 name: String,
 location: String,
 price: String
});

module.exports = mongoose.model('Flat', FlatsSchema);

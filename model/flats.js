'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlatsSchema = new Schema({
 title: {
   type: String,
   trim: true,
   required: 'Please enter a flat title!',
 },
 location: String,
 price: {
   type: Number,
   required: 'Please enter a price!'
 },
 amenities: [String],
 image: String,
});

module.exports = mongoose.model('Flat', FlatsSchema);

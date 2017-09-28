'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
  url: {type: String},
  title: {type: String},
  description: {type: String},
  img: {type: String},
  "review": {type: [Object]},
  "review.$.one": {type: String},
  "review.$.two": {type: String},
  "review.$.three": {type: String},
  "review.$.four": {type: String},
  "restaurant": {type: [Object]},
  "restaurant.$.gastro_rating": {type: Number},
  "restaurant.$.nomad_rating": {type: Number},
  "restaurant.$.price": {type: Number},
  "restaurant.$.address": {type: String},
  "restaurant.$.phone": {type: String},
  "restaurant.$.website": {type: String},
  "restaurant.$.date": {type: String},
  location: {type: String}
});

module.exports = mongoose.model("Article", ArticlesSchema);

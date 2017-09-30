'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
  url: {type: String},
  title: {type: String},
  description: {type: String},
  img: {type: String},
  review: {
    one: {type: String},
    two: {type: String},
    three: {type: String},
    four: {type: String}
  },
  restaurant: {
    gastro_rating: {type: Number},
    nomad_rating: {type: Number},
    price: {type: Number},
    address: {type: String},
    phone: {type: String},
    website: {type: String},
    date: {type: String}
  },
  location: {type: String}
});

module.exports = mongoose.model("Article", ArticlesSchema);

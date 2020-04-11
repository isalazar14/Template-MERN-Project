const mongoose = require('mongoose');

const ThingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true},
}, { timestamps: true });

const Thing = mongoose.model('thing', ThingSchema);

module.exports = Thing;
const mongoose = require('mongoose');

// replace "thing" with desired model name

const ThingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

const Thing = mongoose.model('thing', ThingSchema);

module.exports = Thing;
const mongoose = require("mongoose");
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;
const BlingSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    value: {
      type: SchemaTypes.Double,
      required: true
    },
    bling_send: {
      type: Boolean,
      required: true
    }
  }
);

module.exports = mongoose.model("Bling", BlingSchema, "bling");

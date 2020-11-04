const mongoose = require("mongoose");
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;
const BlingSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Bling", BlingSchema);
const mongoose = require("mongoose");

const projectEntrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ProjectEntry", projectEntrySchema);

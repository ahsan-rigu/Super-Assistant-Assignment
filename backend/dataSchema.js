const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Checkbox: {
    type: [String],
    required: true,
  },
  Dropdown: {
    type: String,
    required: true,
  },
  FileUpload: {
    type: String,
    required: true,
  },
  LinearScale: {
    type: String,
    required: true,
  },
  MCQ: {
    type: String,
    required: true,
  },
  MultipleChoiceGrid: {
    type: [String],
    required: true,
  },
  Paragraph: {
    type: String,
    required: true,
  },
  ShortAnswer: {
    type: String,
    required: true,
  },
  TickBoxGrid: {
    type: [[String]],
    required: true,
  },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;

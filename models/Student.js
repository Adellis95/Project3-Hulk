const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Enter a name or username",
  },
  firstName: {
    type: String,
    trim: true,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Enter a last name",
  },
  starTotal: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  classCode: {
    type: Number,
  },
  tasksCompleted: {
    type: Array,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
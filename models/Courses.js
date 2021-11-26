const mongoose = require("mongoose");

// schema med require.
const CourseSchema = mongoose.Schema({
  course_code: {
    type: String,
    required: true,
  },
  course_name: {
    type: String,
    required: true,
  },
  course_plan: {
    type: String,
    required: true,
  },
  progress: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
});

//exportera
module.exports = mongoose.model("Courses", CourseSchema);

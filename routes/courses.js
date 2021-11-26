const express = require("express");
const { remove } = require("../models/Courses");
const router = express.Router();

// importera schema
const Course = require("../models/Courses");

//Routes
//Hämta
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//lägg till
router.post("/", (req, res) => {
  const course = new Course({
    course_code: req.body.course_code,
    course_name: req.body.course_name,
    course_plan: req.body.course_plan,
    progress: req.body.progress,
    term: req.body.term,
  });
  course
    .save()
    .then((data) => {
      res.json(data);
      console.log("New data added to database myCV collection Courses");
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});

//hämta enskild kurs
router.get("/id=:id", async (req, res) => {
  try {
    const singleCourse = await Course.findById(req.params.id);
    res.json(singleCourse);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//radera kurs
router.delete("/id=:id", async (req, res) => {
  //underscore för att mongoDB ser ut så.
  try {
    const removeCourse = await Course.deleteOne({ _id: req.params.id });
    res.json(removeCourse);
    console.log("Data removed");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//uppdatera element
router.put("/id=:id", async (req, res) => {
  //skicka med det som ska uppdateras
  try {
    const updateCourse = await Course.updateOne(
      { _id: req.params.id },
      {
        $set: {
          course_code: req.body.course_code,
          course_name: req.body.course_name,
          course_plan: req.body.course_plan,
          progress: req.body.progress,
          term: req.body.term,
        },
      }
    );
    res.json(updateCourse);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;

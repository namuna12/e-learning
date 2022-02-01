const Course = require("../models/course");
// const connection= require('../dbconnect');


exports.findCourses = async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
};

exports.createCourse = async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.send(course);
};

//find course by id
exports.findCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.send(course);
  } catch {
    res.status(404).send({ error: "course is not found!" });
  }
};

exports.findCourseByCategory = async (req, res) => {
  try {
    const course_cat = await Course.find({category: categoryId });
    res.send(course_cat);
  } catch {
    res.status(404).send({ error: "ct is not found!" });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    Object.assign(course, req.body);
    course.save();
    res.send(course);
  } catch {
    res.status(404).send({ error: "course is not found!" });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    await course.remove();
    res.send(true);
  } catch {
    res.status(404).send({ error: "course is not found!" });
  }
};
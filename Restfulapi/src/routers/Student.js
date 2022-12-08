const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    console.log(e);
  }
});

router.get("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const studentData = await Student.findOne({ name });
    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const updateStudents = await Student.findOneAndUpdate({ name }, req.body, {
      new: true,
    });
    res.send(updateStudents);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(id);
    if(!id){
        return res.status(400).send();
    }
    res.send(deleteStudent);
  } catch (e) {
    res.status(500).send(e); 
  }
});

module.exports = router;

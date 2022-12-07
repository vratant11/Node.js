const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
//create a new students
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.send(user);
//      return res.status(201);
//     })
//     .catch((e) => {
//       console.log(e);
//      return res.status(400);
//     });
//   res.send("Hello");
// });
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Connection is setup at ${port}`);
});

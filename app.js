let express = require("express");
let app = express();
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let Application = require("./model/application");

//middlewares

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    "<h2>Api for Favcode54's Application System</h2> <small>Developed by Favour Ori</small>"
  );
});

app.get("/api/application", (req, res) => {
  Application.find()
    .then(allApplications => {
      res.status(200).send(allApplications);
    })
    .catch(err => {
      res.send(err.message);
    });
});

app.post("/api/application", (req, res) => {
  let application = new Application({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    state: req.body.state,
    country: req.body.country,
    dob: req.body.dob,
    email: req.body.email,
    phone: req.body.phone,
    course: req.body.course,
    level: req.body.level,
    question: req.body.question
  });

  application
    .save()
    .then(newApplication => {
      res.status(200).send(newApplication);
    })
    .catch(err => {
      res.send(err.message);
    });
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT} `);
});

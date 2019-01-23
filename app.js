let express = require("express");
let app = express();
const shell = require("shelljs");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let Application = require("./model/application");
let cors = require("cors");
app.use(cors());

const command = [
  "echo $PWD",
  "whoami",
  "git fetch --all",
  'git checkout --force "origin/master"',
  "git pull origin master",
  "git status",
  "git submodule sync",
  "git submodule update",
  "git submodule status",
  "supervisorctl restart favcode"
];

const nodemailer = require("nodemailer");
//app.use(cors());
//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send(
    "<h2>Api for Favcode54's Application System</h2> <small>Developed by Favour Ori I see what you did there again o.</small>"
  );
});

app.get("/api/9182300201submittedapplications", (req, res) => {
  Application.find()
    .then(allApplications => {
      res.status(200).send(allApplications);
    })
    .catch(err => {
      res.send(err.message);
    });
});

app.get("/shell", (req, res) => {
  command.map((item, index) => {
    shell.exec(item);
  });
  res.send("Worked");
});

app.post("/shell", (req, res) => {
  command.map((item, index) => {
    shell.exec(item);
  });
  res.send("Worked");
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

  Application.findOne({ email: req.body.email }).then(data => {
    if (data) {
      res.status(200).send({
        success: false,
        message: "You have already submitted an Application"
      });
    } else {
      application
        .save()
        .then(newApplication => {
          res.status(200).send({
            success: true,
            message: "Application Submitted",
            data: newApplication
          });
        })
        .catch(err => {
          res.send(err.message);
        });
    }
  });
});

let PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT} `);
});

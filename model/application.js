let mongoose = require("mongoose");

//connecting to mongoose
mongoose.connect(
  "mongodb://favourtheo:1A2b3c--@ds153304.mlab.com:53304/favcode54application",

  { useNewUrlParser: true }
);

//define schema
let applicationSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  dob: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  level: { type: String, required: true },
  question: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now }
});

//creating the model

let Application = mongoose.model("application", applicationSchema);

module.exports = Application;

let mongoose = require("mongoose");
//define schema

let applicationSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

//creating the model

let Application = mongoose.model("application", applicationSchema);

let express = require("express");
let app = express();
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

//middlewares

app.use(bodyParser);

//connecting to mongoose
mongoose.connect(
  "",

  { useNewUrlParser: true }
);



app.get("/", (req, res) => {
  res.send(
    "<h2>Api for Favcode54's Application System</h2> <small>Developed by Favour Ori</small>"
  );
});

app.get("/api/application", (req, res) => {
  res.status(200).send("All submitted Applications");
});

app.post("/api/application", (req, res) => {
  res.send("Post here..");
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT} `);
});

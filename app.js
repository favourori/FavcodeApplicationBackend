let express = require("express");
let app = express();
let mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send(
    "<h2>Api for Favcode54's Application System</h2> <small>Developed by Favour Ori</small>"
  );
});

app.post("/api/application", (req, res) => {
  res.semd("Post here..");
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT} `);
});

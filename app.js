//hämta express
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//spara anslutning i separat fil
require("dotenv/config");

// variabler
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

//Importera routes
const coursesRoute = require("./routes/courses.js");
//middleware
app.use("/api/courses", coursesRoute);

//connect to database. DB_CONNECTION är anslutningen som sparas i separat fil.
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to database")
);

//lokal anslutning
//mongoose.connect("mongodb://localhost:27017/myCV");
//listen på servern
app.listen(PORT, () => {
  console.log(`server running on port: http://localhost:${PORT}/api/courses`);
});

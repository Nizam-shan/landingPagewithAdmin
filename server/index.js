const express = require("express");
const app = express();
const multer = require("multer");
const mysql = require("mysql");
// const utlis = require("./utiles");

// Configure multer for handling formdata
const upload = multer();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
const mysqlConnection = require("./database");

// app.use(upload.any());

app.use(cors());

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Nizamshan@123",
//   database: "test",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log("Error connecting", err);
//     return;
//   }
//   console.log("db connected");
// });

// connection.on("error", (error) => {
//   console.error("error mysql", error);
// });

const adminRoute = require("./route/adminRoute");
const purposeRoute = require("./route/courseRoute");
const middleware = require("./route/authRoutes");

// mongoose
//   .connect(
//     "mongodb+srv://Nizam:Nizam@ibs.okt9mx7.mongodb.net/?retryWrites=true&w=majority&appName=IBS"
//   )
//   .then(() => console.log("connected"))
//   .catch((err) => console.log("error", err));
app.get("/", (req, res) => {
  res.send("GET Request Called");
});
app.use("/admin", adminRoute);
app.use("/purpose", purposeRoute);
app.use("/otp", middleware);

const port = 8000;

app.listen(port, () => {
  console.log("server is up", port);
});

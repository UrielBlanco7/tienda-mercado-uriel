const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
const start = () => console.log("On http://localhost:8000");
app.listen(port, start);
const publico = path.resolve(__dirname, "./public");
app.use(express.static(publico));


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/home.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/register.html"));
});
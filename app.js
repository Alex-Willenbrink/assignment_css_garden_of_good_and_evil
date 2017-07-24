const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const cookieObj = req.cookies.cookieObj || {};
  for (let key in req.body) {
    cookieObj[key] = req.body[key];
  }

  res.cookie("cookieObj", cookieObj, { httpOnly: false });
  res.render("index");
});

app.listen(3000, "0.0.0.0", (req, res) => {
  console.log("listening on port 3000");
});

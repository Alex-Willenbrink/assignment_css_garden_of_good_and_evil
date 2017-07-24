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
  res.end("Hello Sir");
})

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const cookieArray = req.cookies.cookieArray || [];

  cookieArray.push(id);

  res.cookie("cookieArray", cookieArray, { maxAge: 90000, httpOnly: false });
  console.log(req.cookies.cookieArray);
  res.end();
})


app.listen(3000, "0.0.0.0", (req, res) => {
 console.log("listening on port 3000");
 });

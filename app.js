const app = require("express")();
const expressHandlebars = require("express-handlebars");

const hbs = expressHandlebars.create({
  defaultLayout: "main"
  partialsDir: '/views'
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);




app.listen(3000, "0.0.0.0", (req, res) => {
 console.log("listening on port 3000");
 });

// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
const db = require("./lib/database_query.js")

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");

// Mount all resource routes
app.use("/user", usersRoutes(db));


// Home page
app.get("/", (req, res) => {
  res.render("welcome");
});

//Route for Login
app.get('/login/:userId', (req, res) => {
  res.cookie('user_id', req.params.userId);
  res.redirect('/user/tasks');
});

//Route for Logout
app.post('/logout',(req,res)=>{
  res.clearCookie("user_id");
  res.redirect("/");
})

//Route for register
app.get("/register",(req,res)=>{
  res.render("index");
})

//Listening for PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

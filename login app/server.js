const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const session = require("express-session");
const {v4=uuidv4} = require("uuid");
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// load static assests
app.use('/static',express.static(path.join(__dirname,'public')))

app.use(session)
app.get('/', (req, res) => {
  res.render('base', { title: "Login System" });
});

app.listen(port, () => {
  console.log("Listening to the server on http://localhost:3000");
});

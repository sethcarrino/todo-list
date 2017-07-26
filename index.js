const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')
const app = express();


// run mustache engine
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// serve static files
app.use(express.static('public'));

// run body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// run validator
app.use(expressValidator());

// todos array
let todos = [];

// completed array
let completed = [];

// configure root path
app.get("/", function (req, res) {
  res.render('home', {
    todos: todos
  });
});

// post new data into array
app.post("/", function (req, res) {
    console.log(req.body);
    todos.push(req.body.todo);
    res.redirect('/');
});


app.post("/completed", function (req, res) {
  console.log(req.body);
    completed.push(req.body.todo);
    res.redirect('/');
});


// listen for port
app.listen(3000, function(req, res) {
  console.log('Successfully started application!');
})

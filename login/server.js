var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// connect to mongoDB
mongoose.connect(configDB.url);

// require('./config/passport')(passport); //pass passport for configuration

// set up express

//log every request to the console
app.use(morgan('dev')); 
// read cookies (needed for auth)
app.use(cookieParser());
// get info from html forms
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// set up ejs for templating
app.set('view engine', 'ejs');

// required for passport
app.use(session({
  secret: 'password',
  name: 'name',
  store: sessionStorage
})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash()); //use connect-flash for flash messages stored in session

//load our routes pass in our app and fully configured passport
require('./app/routes.js')(app, passport);

app.listen(port);
console.log('Listening on port' + port);
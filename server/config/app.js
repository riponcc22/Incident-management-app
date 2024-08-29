/*
GROUP 3 PROJECT
Date: 11-12-2023
*/

// installed 3rd party packages
// let createError = require('http-errors');
// let express = require('express');
// let path = require('path');
// let cookieParser = require('cookie-parser');
// let logger = require('morgan');
// var bodyParser = require('body-parser');
// const cors = require('cors');

// // modules for authentication
// let session = require('express-session');
// let passport = require('passport');
// let passportLocal = require('passport-local');
// let localStrategy = passportLocal.Strategy;
// let flash = require('connect-flash');

// // database setup
// let mongoose = require('mongoose');
// let DB = require('./db');

// // MONGODB Compass
// //point to your DB, URI
// mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });
// let mongoDB = mongoose.connection;
// mongoDB.on('error', console.error.bind(console, 'Error in Connection'));
// mongoDB.once('open', () => {
//    console.log('Connected to MongoDB Atlas!!');
// });

// let indexRouter = require('../routes/index');
// let usersRouter = require('../routes/users');
// let productRouter = require('../routes/Byproduct');

// let app = express();

// // view engine setup
// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: 'false' }));
// console.log(__dirname);
// app.use(express.static(path.join(__dirname, '../../dist/browser')));
// app.use(express.static(path.join(__dirname, '../../public')));
// app.use('/data', express.static(path.join(__dirname, '../../dist/browser')));
// app.use(express.static(path.join(__dirname, '../../node_modules')));
// app.use(cors());



// // Setup express session
// app.use(session({
//   secret: "SomeSecret",
//   saveUninitialized: false,
//   resave: false
// }));

// // Initialize flash
// app.use(flash());

// // Initialize passport
// app.use(passport.initialize());
// app.use(passport.session());

// // Passport user configuration
// let userModel = require('../models/user');
// let User = userModel.User;

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/data', productRouter);

// // Catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // Error handler
// app.use(function (err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error', { title: 'Error' });
// });


// module.exports = app;


let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors'); // Add this line


// modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');


// database setup
let mongoose = require('mongoose');
let DB = require('./db');


// MONGODB Compass
// point to your DB, URI
mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Error in Connection'));
mongoDB.once('open', () => {
  console.log('Connected to MongoDB Atlas!!');
});


let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let productRouter = require('../routes/Byproduct');
//let incidentRouter = require('../routes/incidentRouter'); // Add this line


let app = express();


// Enable CORS for all routes
app.use(cors()); // Add this line


// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express  -e


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));


app.use(express.static(path.join(__dirname, '../../node_modules')));


// setup express session
app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}));


// initialize flash
app.use(flash());


// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// passport user configuration


// create a User Model Instance


let userModel = require('../models/user');
let User = userModel.User;


// implement user
passport.use(User.createStrategy());


// serialize and deserialize the user info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', productRouter);
//app.use('/data', incidentRouter); // Add this line


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});


module.exports = app;

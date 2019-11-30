var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();


var db = require('./db');
db = new db('localhost', '27017', 'victoriasite');
db.connectDB();
//const Schema = db.getConnect().Schema;

var users = require('./models/users.js');
var services = require('./models/services.js');
users = new users();
services = new services();
/*
users.create({name: "Adls", 
            role: "admin", 
            lasTime: "2017-03-14T14:10:20.391",
            timeReg: "2017-03-14T14:10:20.391"}, 
            (err) => {
              if (err) {
                console.log(err);
              }
              console.log("data is push");
      });
      
services.create({service_name: "Consult",
                price: 10000}, 
                (err) => {
                  if (err) {
                    console.log(err);
                  }
                  console.log("data is push");
});      
*/

services.getAll((err, docs) => {
  if (err) {
    console.log(err);
  }
  console.log(docs);
});      


services.remove({ service_name: "Consult"}, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

/*
users.update({name: "Adls"}, {name: "kek"}, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
})
*/
/*
users.getById("5de0e074bec4d2b365cddca4", (err, docs) => {
  console.log(docs);
})
*/

/*
db.connectDB((err) => {
    if (err) {
      console.log(err);
    }
});
 
console.log(db.getConnect());
*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

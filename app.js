var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

/*
var db = require('./db');
db = new db('localhost', '27017', 'victoriasite');
db.connectDB();
const Schema = db.getConnect().Schema;
const userScheme = new Schema({
  name: String,
  age: Number
});
 
const User = db.getConnect().model("User", userScheme);
const user = new User({
  name: "Bill",
  age: 41
});
 
user.save(function(err){
  db.getConnect().disconnect();  // отключение от базы данных
    
  if(err) return console.log(err);
  console.log("Сохранен объект", user);
});
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

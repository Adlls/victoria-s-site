var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressHbs = require('express-handlebars');
const hbs = require("hbs");
const hbshelpers = require('handlebars-helpers');
const multihelpers = hbshelpers();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var servicesRouter = require('./routes/services');
var app = express();
var db = require('./db');
db = new db('localhost', '27017', 'victoriasite');
db.connectDB();

// view engine
app.engine(
  "hbs",
  expressHbs ({
    helpers: multihelpers,
    extname: ".hbs",
    layoutsDir: "views/layouts",
    defaultLayout: "layout"
  })
);

// view engine setup
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");


hbs.registerHelper("createStringList", function(result) {
  return new hbs.SafeString(result);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/services', servicesRouter);

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

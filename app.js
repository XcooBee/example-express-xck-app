var path = require('path');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var createError = require('http-errors');
var logger = require('morgan');

var cookieSetterRouter = require('./routes/cookiesetter');
var indexRouter = require('./routes/index');
var menuRouter = require('./routes/menu');
var privacyRouter = require('./routes/privacy');
var termsRouter = require('./routes/terms');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.text({
  extended: true,
  type: "*/*"
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cookiesetter', cookieSetterRouter);
app.use('/menu', menuRouter);
app.use('/privacy', privacyRouter);
app.use('/terms', termsRouter);
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

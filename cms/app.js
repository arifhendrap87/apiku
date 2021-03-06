var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const db = require("./config/db.config.js");

require('dotenv').config()
//console.log(process.env.DB_CONNECTION)
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(function (err, req, res, next) {
  res.status(500).send(err);
});


//route custom
require("./routes/menu.js")(app);
require("./routes/ibadah.js")(app);
require("./routes/ibadah_activity.js")(app);
require("./routes/options.js")(app);
require("./routes/users.js")(app);
require("./routes/posts.js")(app);
// require("./routes/user.js")(app);
// require("./routes/worship_main.js")(app);
// require("./routes/worship_main_activity.js")(app);
// require("./routes/worship_additional.js")(app);
// require("./routes/worship_additional_activity.js")(app);

var server = app.listen(5000, function () {
  console.log('Node server is running..');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('*', function (req, res) {
  res.status(404).send('what???');
});

app.use((req, res, next) => {
  res.status(404).send({ message: "Not Found" });
});





// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });


// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

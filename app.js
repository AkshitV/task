var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const port = 3000 || process.env.PORT;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task', {useMongoClient: true})
  .then( () => { 
    console.log("Successfully connected with mongodb at mongodb://127.0.0.1:27017/task")
  })
  .catch (()=> {
    console.log("connected unsuccessfully with mongodb at mongodb://127.0.0.1:27017/task")

  })


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(cors());

// http.createServer(app).listen(app.get('port'),
//   function(){
//     console.log("Express server listening on port " + app.get('port'));
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("hererererer")
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

app.listen(port, () => {

  
  console.log("Express Listening at http://localhost:" + port);

});
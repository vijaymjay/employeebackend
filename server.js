const express = require('express'),
 path = require('path'),
 favicon = require('static-favicon'),
 logger = require('morgan'),
 dotenv = require('dotenv'),
 bodyparser = require('body-parser'),
 expressValidator = require('express-validator'),
 employee = require('./routes/employee'),
 cors = require("cors"); 
 dotenv.config();
 

var app = express();

app.use(cors());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

app.use(favicon());
app.use(logger('dev'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));


app.use('/employee',employee);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
 // res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.send({status:err})
  return;
});

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});



app.listen(process.env.PORT, () => {
    console.log(`Express server started at port : ${process.env.PORT}`);
});
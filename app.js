var session = require('express-session');
var SessionStore = require('express-mysql-session');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var HttpError = require('./error').HttpError;
var config = require('./config');
var routes = require('./routes/routes');

var app = express();
// view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var options = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'electronic_journal'
};

app.use(session({
    key: config.get('session:key'),
    secret: config.get('session:secret'),
    cookie: config.get('session:cookie'),
    store: new SessionStore(options),
    secure: false,
    resave: false,
    saveUninitialized: true
}));
app.use(require('middleware/sendHttpError'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function getUser(req, res, next) {
    req.user = res.locals.user = null;
    if (!req.session.userId) return next();
    var db = require('./libs/db_connect');
    db(function (err, connection) {
        connection.query("SELECT * FROM user where user_id = ?",req.session.userId,function(err,user){
                if(err) throw next(err);
                req.user = res.locals.user = user[0];
                connection.release();
            next()
        });
    });
    }
);
// error handler
app.use(function(err, req, res, next) {

  if(typeof err == 'number'){
    err = new HttpError(err);
  }
  if (err instanceof HttpError){
    res.sendHttpError(err);
  }else{
    if (app.get('env')=='davelopment'){
      express.errorHandler()(err, req, res, next);
    }else{
      console.log(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});


app.use('/',routes);
module.exports = app;

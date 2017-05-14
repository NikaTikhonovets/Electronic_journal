/**
 * Created by Ника Тихоновец on 13.05.2017.
 */
var User = require('../models/user');
var db = require('../libs/db_connect');

module.exports = function User(req, res, next) {
    req.user = res.locals.user = null;
    console.log(this.session.userId);
    if (!req.session.userId) return next();

    db(function (err, connection) {
        connection.query("SELECT * FROM user where user_id = ?",req.session.userId,function(err,user){
            if(err) throw next(err);
            req.user = res.locals.user = user[0];
            connection.release();
        });
    });        next();

};


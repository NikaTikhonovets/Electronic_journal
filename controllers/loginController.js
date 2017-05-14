/**
 * Created by Ника Тихоновец on 11.05.2017.
 */

var async = require('async');
var db = require('../libs/db_connect');
var HttpError = require('../error/index').HttpError;
var User = require('../models/user');


module.exports = {

    loginPage: function (req, res, next) {
        res.render('login');
    },

    checkUser: function (req, res, next) {
        var login = req.body.login;
        var password = req.body.password;
        var currentUser;

        async.waterfall([
            function (callback) {
                db(function (err, connection) {
                    connection.query("SELECT * FROM user where login = ?",login,function(err,user){
                        if(err) throw err;
                        connection.release();
                        callback(null,user);
                    });
                });
            },
            function (user,callback) {
                if(user){
                    if(user[0].password_hash === password){
                        currentUser = new User(user[0]);
                        callback(null,user);
                    }
                    else{
                        next(new HttpError(403,"Неверный пароль"))
                    }
                } else{
                    next(new HttpError(403, "К сожалению, такого пользователя нет!"))
                }
            }
        ],function (err) {
            if (err) return next(err);
            req.session.userId = currentUser.user_id;
            res.end();
            }
        )
    },

    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    }
};
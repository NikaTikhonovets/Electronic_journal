/**
 * Created by Ника Тихоновец on 04.04.2017.
 */

var db = require('../libs/db_connect');
var HttpError = require('../error/index').HttpError;

module.exports = {

    newSchoolPage: function (req, res) {
        res.render('newSchool');
    },

    addSchool: function (req, res, next) {
        var randomString = require("randomstring");
        var login = randomString.generate(5);
        var password = randomString.generate(5);
        var name = req.body.name;
        var address = req.body.address;
        var contact_info = req.body.contact_info;
        var email = req.body.email;
        var dop_info = req.body.dop_info;

        db(function (err, connection) {
            connection.query("INSERT INTO user (login,email, password_hash, role) VALUES(?,?,?,?)",[login,email,password,'school'],function(err,result) {
                if (err) throw err;
                var user_id = result.insertId;
                connection.query("INSERT INTO educational_organization (name,address, email, contact_info, about,user_id) VALUES(?,?,?,?,?,?)", [name, address, email, contact_info, dop_info, user_id], function (err, user) {
                    if (err) throw next(err);
                    var nodemailer = require('nodemailer');
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'nika.tikhonovets@gmail.com',
                            pass: '2519874kristina'
                        }
                    });
                    var mailOptions = {
                        from: '"👻" <nika.tikhonovets@gmail.com>',
                        to: email,
                        subject: 'Одобрено ✔',
                        text: 'Заявка на добавление школы одобрена. Можете войти на сайт, используя следующие данные: логин:'+ login + ' , пароль:'+ password +' .',
                        html: 'Заявка на добавление школы одобрена.<br> Можете войти на сайт, используя следующие данные:<br><b>Логин:'+ login +'</b><br><b>Пароль:'+ password +'</b>'
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message %s sent: %s', info.messageId, info.response);
                    });

                });
                connection.release();
            });
        });

        res.end();
    }
};
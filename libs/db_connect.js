/**
 * Created by Ника Тихоновец on 29.03.2017.
 */
var mysql = require('mysql'),
    mysqlUtilities = require('mysql-utilities');
var config = require('../config');
//
// var host = config.get('database:host'),
//     user = config.get('database:user'),
//     password = config.get('database:password'),
//     database = config.get('database:database_name');
//
// module.export = mysql.createConnection({
//     host:     host,
//     user:     user,
//     password: password,
//     database: database
// });

var mySQL = require('mysql');
var pool  = mySQL.createPool({
    host: config.get('database:host'),
    user: config.get('database:user'),
    password: config.get('database:password'),
    database: config.get('database:database_name')
});
var getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the cb instead of throwing it
        if(err) {
            return callback(err);
        }
        callback(null, connection);
    });
};
module.exports = getConnection;










/*
module.exports = function(app) {
    var opts = {
        database: database,
        protocol: "mysql",
        host: host,
        port: 3306,
        user: user,
        password: password,
        query: {
            pool: true,
            debug: true,
            strdates: false
        }
    };*/


 /*   app.use(orm.express(opts, {
        define: function (db, models, next) {
            models.user = db.define('user',require('../models/user') );
            db.sync();
            next();
        }
    }));
}*/
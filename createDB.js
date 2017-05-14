var mysql = require('mysql'),
    mysqlUtilities = require('mysql-utilities');
var config = require('../electronic_journal/config');


var db = require('../electronic_journal/libs/db_connect');

db(function (err, connection) {
    if(err) throw err;
    console.log("connection: " + connection);
    connection.query("INSERT INTO educational_organization (name,address, email, contact_info, about) VALUES(?,?,?,?,?)",['test','test','test','test','test'],function(err,result){
        if(err) throw err;
        console.log('ok');
        connection.release();
    })});
var db = require('../electronic_journal/libs/orm');


db.driver.execQuery("SELECT * FROM user", function (err, data) {
    if (err) throw err;
    console.dir(data);
});

db.close();
















/*
// Library dependencies
var mysql = require('mysql'),
    mysqlUtilities = require('mysql-utilities');
var config = require('../electronic_journal/config');

var connection = mysql.createConnection({
    host:     config.get('database:host'),
    user:     config.get('database:user'),
    password: config.get('database:password'),
    database: config.get('database:database_name')
});

connection.connect();

// Mix-in for Data Access Methods and SQL Autogenerating Methods
mysqlUtilities.upgrade(connection);

// Mix-in for Introspection Methods
mysqlUtilities.introspection(connection);

connection.queryRow(
    'SELECT * FROM user where user_id=?', [1],
    function(err, row) {
        console.dir({queryRow:row});
    }
);


// Release connection
connection.end();*/
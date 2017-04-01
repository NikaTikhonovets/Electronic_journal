/**
 * Created by Ника Тихоновец on 29.03.2017.
 */
var orm = require("sequelize");
var config = require('../config');

var host = config.get('database:host'),
    user = config.get('database:user'),
    password = config.get('database:password'),
    database = config.get('database:database_name');


var sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

sequelize.async();

module.exports = sequelize;
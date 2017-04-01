/**
 * Created by Ника Тихоновец on 31.03.2017.
 */
var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('university', { });
});

module.exports = router;
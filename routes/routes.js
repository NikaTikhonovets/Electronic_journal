var express = require('express');
var router = express.Router();

var controllers = require('.././controllers');

router.get('/', controllers.aboutController.index);

router.get('/school', controllers.schoolController.getSchool);

router.get('/university', controllers.universityController.getUniversity);

router.get('/review', controllers.reviewController.getReview);

router.get('/contact', controllers.contactController.showContact);

router.get('/join', controllers.joinController.showJoinPage);

router.get('/newSchool', controllers.newSchoolController.newSchoolPage);
router.post('/newSchool', controllers.newSchoolController.addSchool);

router.get('/login', controllers.loginController.loginPage);
router.post('/login', controllers.loginController.checkUser);
router.post('/logout', controllers.loginController.logout);

module.exports = router;
var express = require('express');
var router = express.Router();
var consultaionsRouter = require('../controllers/consultations');
//consultaionsRouter = new consultaionsRouter();
var consultationsModel = require('../models/consultations');
//var consultations = new consultationsModel();
//var users = require('../controllers/users');
//var usersController  = new users();
/* GET home page. */
router.get('/', function(req, res, next) {
  //consultaionsRouter.view(req, res);
 // consultations.get({"description":"consultation1"}, (err) =>{
 //   console.log(err);
 // });
  res.render('index', { title: 'Victoria\'s site' });

});

module.exports = router;

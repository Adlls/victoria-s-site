var express = require('express');
var usersContollers = require('../controllers/users');
var router = express.Router();
usersContollers = new usersContollers();

/* GET users listing. */
router.get('/', (req, res, next) => {
 usersContollers.view(req, res);
  
});


module.exports = router;

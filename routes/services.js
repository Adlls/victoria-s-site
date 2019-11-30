var express = require('express');
var serviceContollers = require('../controllers/services');
var router = express.Router();
serviceContollers = new serviceContollers();

/* GET users listing. */
router.get('/', (req, res, next) => {
  serviceContollers.view(req, res);
});

module.exports = router;

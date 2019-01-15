var express = require('express');

var router = express.Router();

/* GET terms page. */
router.get('/', function(req, res, next) {
  res.render('terms', { title: 'Terms of Service' });
});

module.exports = router;

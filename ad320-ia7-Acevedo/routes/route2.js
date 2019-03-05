const express = require('express'),
  router = express.Router(),
  colors = require('../colors.json');

router.get('/', function(req, res, next) {
    res.render('route2', JSON.stringify(colors));
});


module.exports = router;

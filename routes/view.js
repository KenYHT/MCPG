// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

module.exports = function(app, router) {
	router.get('/', function(req, res) {
		res.render('index', { title: 'Express' });
	});

	router.get('/profile', function(req, res) {
		res.render('profile');
	});
};

// module.exports = router;

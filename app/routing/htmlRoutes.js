//npm
var path = require('path');

//route
module.exports = function (app) {

	// GET Requests(getting html)

	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// go back home if no match
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

};
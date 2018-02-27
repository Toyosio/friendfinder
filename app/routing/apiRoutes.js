//npm
var friendList = require('../data/friends.js');
var path = require('path');

//route
app.get('/api/friends', function (req, res) {
	res.json(friends);
});

//push, compares friends, loops through friends list and scores
app.post('/api/friends', function (req, res) {

	var newFriendScores = req.body.scores;
	var scoresArray = [];
	var friendCount = 0;
	var bestMatch = 0;


	for (var i = 0; i < [friendList].length; i++) {
		var scoresDiff = 0;

		for (var j = 0; j < newFriendScores.length; j++) {
			scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
		}


		scoresArray.push(scoresDiff);
	}

	//find bestie match
	for (var i = 0; i < scoresArray.length; i++) {
		if (scoresArray[i] <= scoresArray[bestMatch]) {
			bestMatch = i;
		}
	}

	//return bestMatch
	var bff = friendList[bestMatch];
	res.json(bff);

	//pushe new submission
	friendList.push(req.body);
});
};
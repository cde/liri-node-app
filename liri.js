require("dotenv").config();

var keys = require('./keys');

var myTweets = require('./my-twitter-parser');
var spotifyThisSong = require('./spotify-this-song');
var movieThis = require('./movie-this');
var doWhatItSays = require('./do-what-it-says');

var args = process.argv.slice(2);
var command = args[0]
var query = args[1];

//For this version: search word must be between "quotes"

switch (command) {
    case 'my-tweets':
        myTweets();
        break;
    case 'spotify-this-song':
        spotifyThisSong(query)
        break;
    case 'movie-this':
        movieThis(query)
        break;
    case 'do-what-it-says':
        doWhatItSays()
        break;
    default:
        console.log('Sorry, we are out of ' + command + '.');
}

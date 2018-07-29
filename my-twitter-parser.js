var keys = require('./keys');
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var log = require('./log');

function myTweets(){
    client.get('statuses/user_timeline.json', {screen_name: 'cdechauri'}, function(error, tweets, response) {
        if(error) throw error;
        console.log("My tweets")
        console.log( "\n------------------------------------------------------------\n\n");
        for (var tweet in tweets) {
            var tweet = tweets[tweet]
            var showTweet = [
                "Created at: " + tweet.created_at,
                "Text: " + tweet.text
            ].join("\n");
            log(showTweet)
            console.log(showTweet + "\n")
        }
    });

}

module.exports = myTweets;
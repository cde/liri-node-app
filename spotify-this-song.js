var keys = require('./keys');
var log = require('./log');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


function _displayData(data) {
    // console.log("In here", data)
    var spotifyData = []
    if(data.type === 'album') {
        spotifyData =  ["Album"]
    }
    if(data.type === 'artist') {
        spotifyData =  ["Artist"]
    }
    spotifyData.push("Name: " + data.name)
    spotifyData.push("Spotify preview link: " + data.external_urls.spotify)
    log(spotifyData.join("\n"))

    return spotifyData.join("\n");

}

function spotifyThisSong(searchQuery) {

    // var types = ['album' , 'artist', 'playlist', 'track']

    if(!searchQuery) {
        searchQuery = 'The Sign'
    }
    console.log("Looking for Song: " + searchQuery + "\n" )


    spotify.search({ type: 'track', query: searchQuery, market: 'US', limit: 10 })
        .then(function(response) {
            var trackItems = response.tracks.items;
            for (var item in trackItems) {
                var album = trackItems[item].album
                // Display Album
                console.log(_displayData(album))
                console.log("===============================================================================")
                // Display Artists
                console.log(_displayData(album.artists[0]) + "\n")
            }

        })
        .catch(function(err) {
            console.log(err);
        });
}


module.exports = spotifyThisSong;
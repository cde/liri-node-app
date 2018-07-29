var fs = require("fs");
var spotifyThisSong = require('./spotify-this-song');

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        console.log(data)
        spotifyThisSong(data)
        // var output = data.split(",");
        // console.log(output);
    });
}

module.exports = doWhatItSays
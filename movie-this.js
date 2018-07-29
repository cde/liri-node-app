var keys = require('./keys');
var request = require('request');
var log = require('./log');

var mainUrl = "https://www.omdbapi.com/?t=";


function movieThis(query) {
    var queryURL = mainUrl + query + "&y=&plot=short&apikey=trilogy"
    request(queryURL, function (error, response, body) {
        if(error) throw error;
        var jsonData = JSON.parse(body)
        console.log(_displayData(jsonData))
    });
}

function _displayData(data){
    var movieInfo = [
        "Title: " + data.Title,
        "Year: " + data.Year,
        "IMDB Rating: " + data.imdbRating,
        "Rotter Rating: " + data.Ratings[1]["Value"],
        "Country produced: " + data.Country,
        "Language: " + data.Language,
        "Plot: " + data.Plot,
        "Actors: " + data.Actors

    ]
    log(console.log(movieInfo.join("\n")))
    return movieInfo.join("\n")

}

module.exports =  movieThis;
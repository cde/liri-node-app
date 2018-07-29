var fs = require("fs");

// Append showData and the divider to log.txt, print data to the console

function logData(data) {
    fs.appendFile("log.txt", data + "\n*****************************\n", function(err) {
        if (err) throw err;
        // console.log(showData);
    });

}


module.exports = logData;
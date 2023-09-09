const fs = require('fs');
const {parse} = require('csv');
const {connect2db} = require("./db")
const filepath = "cdr.log.20230818_10.csv"

// connect2db

fs.createReadStream(filepath)
    .pipe(parse({delimiter:"|", from_line:1}))
    .on("data", function(row) {
        console.log(row);
    })
    .on("end", function() {
        console.log("finished");
    })
    .on("error", function (error) {
        console.log(error.message);
    })





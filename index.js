require('dotenv').config();
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

connection.connect(function(err) {
    if (err) {
        console.log("error connecting to database: "+err.stack)
        return;
    }

    console.log(`connected to ${process.env.DB_DATABASE} database`);
    return
});


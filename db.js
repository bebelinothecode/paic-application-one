require('dotenv').config();
var mysql = require('mysql2');


var connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

let connect2db = connection.connect(function(err) {
    if (err) {
        console.log("error connecting to database: "+err.stack)
        return;
    }

    console.log(`connected to ${process.env.DB_DATABASE} database`);

    //Perform all database operations here.
    
    connection.end((error)=> {
        if (error) {
            console.log("Error closing connection:",error);
            return
        }

        console.log("MySQL connection closed");
    });
});

// export {connect2db}
module.exports = {connect2db}
// // require('dotenv').config();
// // var mysql = require('mysql2');


// // var connection = mysql.createConnection({
// //     host:process.env.DB_HOST,
// //     user:process.env.DB_USERNAME,
// //     password:process.env.DB_PASSWORD,
// //     database:process.env.DB_DATABASE
// // });

// // let data = [1, 'isaac', 34];

// // let query = `INSERT INTO example (id, name, age)
// // VALUES ("${data[0]}","${data[1]}","${data[2]}");`

// // connection.connect(function(err) {
// //     if (err) {
// //         console.log("error connecting to database: "+err.stack)
// //         return;
// //     }
    
// //     console.log(`connected to ${process.env.DB_DATABASE} database`);


    
// //         //Perform all database operations here.
// // connection.query(query,function(err, results) {
// //     if (err) {
// //         console.log("Failed to insert into database:",err.message)
// //     } else {
// //         console.log("Inserted successfully")
// //     }
// //   }
// // );
        
// //     connection.end((error)=> {
// //         if (error) {
// //             console.log("Error closing connection:",error);
// //             return
// //         }
// //         console.log("MySQL connection closed");
// //     });
// // });
// // const fs = require('fs');

// // // Define the file path
// // const filePath = 'cdrlogs.txt'; // Replace with your file path

// // // Read the file contents
// // fs.readFile(filePath, 'utf8', (err, data) => {
// //   if (err) {
// //     console.error('Error reading the file:', err);
// //     return;
// //   }

// //   // Flag to track if the first comma has been replaced
// //   let firstCommaReplaced = false;

// //   // Replace the first comma with a colon in the file content
// //   const modifiedData = data.replace(/,/, (match) => {
// //     if (!firstCommaReplaced) {
// //       firstCommaReplaced = true;
// //       return ':';
// //     }
// //     return match; // Do not replace any more commas
// //   });

// //   // Write the modified content back to the file
// //   fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
// //     if (err) {
// //       console.error('Error writing to the file:', err);
// //     } else {
// //       console.log('First comma replaced with a colon in the file successfully.');
// //     }
// //   });
// // });

// // const fs = require('fs');

// // // Define the file path
// // const filePath = 'cdr.log.20230818_10.csv'; // Replace with your file path

// // // Read the file contents
// // fs.readFile(filePath, 'utf8', (err, data) => {
// //   if (err) {
// //     console.error('Error reading the file:', err);
// //     return;
// //   }

// //   // Split the file content into lines
// //   const lines = data.split('\n');

// //   // Process each line separately
// //   const modifiedLines = lines.map((line) => {
// //     // Flag to track if the first comma has been replaced on this line
// //     let firstCommaReplaced = false;

// //     // Replace the first comma with a colon on this line
// //     const modifiedLine = line.replace(/:/, (match) => {
// //       if (!firstCommaReplaced) {
// //         firstCommaReplaced = true;
// //         return ':';
// //       }
// //       return match; // Do not replace any more commas on this line
// //     });

// //     return modifiedLine;
// //   });

// //   // Join the modified lines back together
// //   const modifiedData = modifiedLines.join('\n');

// //   // Write the modified content back to the file
// //   fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
// //     if (err) {
// //       console.error('Error writing to the file:', err);
// //     } else {
// //       console.log('First comma replaced with a colon on each line in the file successfully.');
// //     }
// //   });
// // });

// const fs = require('fs');

// // Define the file path
// const filePath = 'cdr.log.20230818_10.csv'; // Replace with your file path

// // Read the file contents
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   }

//   // Split the file content into lines
//   const lines = data.split('\n');

//   // Process each line separately
//   const modifiedLines = lines.map((line) => {
//     // Split the line by colons
//     const parts = line.split(':');

//     // Check if there are at least three colons in the line
//     if (parts.length >= 4) {
//       // Replace the fourth element (index 3) with a dot
//       parts[3] = parts[3].replace(/:/g, '.');

//       // Rejoin the modified parts with colons
//       return parts.join(':');
//     }

//     // If there are fewer than four colons, return the original line
//     return line;
//   });

//   // Join the modified lines back together
//   const modifiedData = modifiedLines.join('\n');

//   // Write the modified content back to the file
//   fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
//     if (err) {
//       console.error('Error writing to the file:', err);
//     } else {
//       console.log('Third colon replaced with a dot on each line in the file successfully.');
//     }
//   });
// });

// const fs = require('fs');

// // Define the file path
// const filePath = 'cdr.log.20230818_10.csv'; // Replace with your file path

// // Read the file contents
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     return;
//   }

//   // Split the file content into lines
//   const lines = data.split('\n');

//   // Process each line separately
//   const modifiedLines = lines.map((line) => {
//     // Replace the first comma with a dot on this line
//     const modifiedLine = line.replace(',', '.');

//     return modifiedLine;
//   });

//   // Join the modified lines back together
//   const modifiedData = modifiedLines.join('\n');

//   // Write the modified content back to the file
//   fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
//     if (err) {
//       console.error('Error writing to the file:', err);
//     } else {
//       console.log('First comma replaced with a dot on each line in the file successfully.');
//     }
//   });
// });

// require('dotenv').config();
// const mysql = require('mysql2');

// // Create a MySQL connection
// var connection = mysql.createConnection({
//   host:process.env.DB_HOST,
//   user:process.env.DB_USERNAME,
//   password:process.env.DB_PASSWORD,
//   database:process.env.DB_DATABASE
// })

// // Define the parameters
// const name = 'John';
// const ag = 'Doe';

// // Define the SQL query using NULLIF and placeholders
// const query = 'INSERT INTO your_table (first_name, last_name) VALUES (NULLIF(?, ?), NULLIF(?, ?))';

// // Execute the query with parameters
// connection.execute(query, [firstName, '', lastName, ''], (error, results, fields) => {
//   if (error) {
//     console.error('Error executing the query:', error);
//     return;
//   }

//   console.log('Insert successful.');

//   // Close the connection
//   connection.end();
// });
// require('dotenv').config();
// const mysql = require('mysql2');

// // Create a MySQL connection
// var connection = mysql.createConnection({
//   host:process.env.DB_HOST,
//   user:process.env.DB_USERNAME,
//   password:process.env.DB_PASSWORD,
//   database:process.env.DB_DATABASE
// })

// // Define the parameters
// const id = 1;
// const firstName = 'ebe';
// const age = '';

// // Define the SQL query using NULLIF and placeholders
// const query = 'INSERT INTO example (id, name, age) VALUES (NULLIF(?, ?), NULLIF(?, ?), NULLIF(?, ?))';

// // Execute the query with parameters
// connection.execute(query, [id, '', firstName, '', age, ''], (error, results, fields) => {
//   if (error) {
//     console.error('Error executing the query:', error);
//     return;
//   }

//   console.log('Insert successful.');

//   // Close the connection
//   connection.end();
// });

// require('dotenv').config();
// const fs = require('fs');
// const mysql = require('mysql2');

// // Create a MySQL connection
// var connection = mysql.createConnection({
//   host:process.env.DB_HOST,
//   user:process.env.DB_USERNAME,
//   password:process.env.DB_PASSWORD,
//   database:process.env.DB_DATABASE
// })

// // Define your INSERT query
// const query = 'INSERT INTO example (id, name, age) VALUES (NULLIF(?, ?), NULLIF(?, ?), NULLIF(?, ?))';

// // Create a readable stream from a file
// const readableStream = fs.createReadStream('cdrlogs.csv', 'utf8');

// // Initialize counters for successful and failed insertions
// let successfulInsertions = 0;
// let failedInsertions = 0;

// // Handle data events (data chunks read from the file)
// readableStream.on('data', (chunk) => {
//   // Split the data into rows (assuming each line is a row)
//   const rows = chunk.split('\n');

//   // Process each row and insert it into the database
//   // rows.forEach((row) => {
//   //   const values = row.split('|');

//     // Execute the INSERT query with the row's values
//     connection.query(query, rows, (error, result) => {
//       if (error) {
//         console.error('Error executing the query:', error);
//         failedInsertions++;
//       } else {
//         successfulInsertions++;
//       }
//     });
//   });

// // Handle the 'end' event (when the entire file has been read)
// readableStream.on('end', () => {
//   console.log('Read stream finished.');
//   console.log(`Successful insertions: ${successfulInsertions}`);
//   console.log(`Failed insertions: ${failedInsertions}`);

//   // Close the MySQL connection
//   connection.end();
// });

// // Handle errors
// readableStream.on('error', (err) => {
//   console.error('Error reading the file:', err);
// });


const chokidar = require("chokidar");
const { path } = require("express/lib/application");
// const { watchOptions } = require("nodemon/lib/config/defaults");


const watcher = chokidar.watch("data",{
  ignored: /(^|[\/\\])\../,
  persistent:true
});

watcher.on("ready", ()=> console.log("Ready to watch files"));

// watcher.on("add",path => console.log(`Directory ${path}  has been added to`));
watcher.on("add", (path) => {
  console.log(`${path}`)
  console.log(path);
  if(path.endsWith(".csv")) {
    console.log(`I will use you:`,path);
  } else {
    console.log("wrong file format");
  }
});

watcher.on("error", (error) => {
  console.error(`Chokidar error: ${error.message}`)
});






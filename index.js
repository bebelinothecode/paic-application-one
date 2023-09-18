const fs = require('fs');
const {parse} = require('csv');
const {connection} = require("./db");
const { error } = require('console');
const chokidar = require("chokidar");
const path = require('path');
let successRecords = 0
let failedRecords = 0
let insertquery = `INSERT INTO call_detail_records(
    RECORD_DATE, L_SPC, L_SSN, L_RI, L_GT_I, L_GT_DIGITS, R_SPC, R_SSN, R_RI, R_GT_I, R_GT_DIGITS, SERVICE_CODE, OR_NATURE,
    OR_PLAN, OR_DIGITS, DE_NATURE, DE_PLAN, DE_DIGITS, ISDN_NATURE, ISDN_PLAN, MSISDN, VLR_NATURE, VLR_PLAN, VLR_DIGITS,
    IMSI, STATUS, TYPE, TSTAMP, LOCAL_DIALOG_ID, REMOTE_DIALOG_ID, DIALOG_DURATION, USSD_STRING, ID) VALUES (NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?)
    ,NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?)
    ,NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),
    NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?)
    ,NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?)
    ,NULLIF(?,?),NULLIF(?,?),NULLIF(?,?),NULLIF(?,?))`;


 //Connect to database   
connection.connect(function(err) {
    if (err) {
        console.log("error connecting to database: "+err.message)
        return;
    }
    
    console.log(`connected to ${process.env.DB_DATABASE} database`);        
});

    const watcher = chokidar.watch("data",{
        ignored: /(^|[\/\\])\../,
        persistent:true,   
    });

    watcher.on("ready", ()=> console.log("Ready to watch files"));

    //watch data folder persistently for any .csv file additions
    watcher.on("add", (path) => {
        if(path.includes("cdr.log")&&path.endsWith(".csv")) {
          console.log("I will use you");

    fs.createReadStream(path)
    .pipe(parse({delimiter:"|", from_line:1}))
    .on("data", function(row) {
        connection.query(insertquery, [row[0]," ",row[1]," ",row[2]," ",row[3]," ",row[4]," ",row[5]," ",row[6]," ",row[7]," ",row[8]," ",row[9]," ",
        row[10]," ",row[11]," ",row[12]," ",row[13]," ",row[14]," ",row[15]," ",row[16]," ",row[17]," ", row[18]," ", row[19]," ",row[20]," ",row[21]," ",row[22]," ",
        row[23]," ",row[24]," ",row[25]," ",row[26]," ",row[27]," ",row[28]," ",row[29]," ",row[30]," ",row[31]," ",row[32]," "],function(err,result) {
            if (err) {
                throw err
            } else {
                // console.log(result.affectedRows);
                successRecords++;
                    // successRecords += result.affectedRows;
            
            }
            // for (let index = 0; index < row.length; index++) {
            //         successRecords += result.affectedRows;
            // }
        })
        console.log(successRecords)
    })
    .on("end", function() {
        console.log("finished");
        // console.log("Successful entries:",successRecords);
        // console.log("Failed records:",failedRecords);
        const content = `Name of the file:${path}\nSuccessful entries:${successRecords}\nFailed entries:${failedRecords}`;
        console.log(content);


        // connection.end((error)=> {
        //     if (error) {
        //         console.log("Error closing connection:",error);
        //         return
        //     }
        //     console.log("MySQL connection closed");
        //     return
        // });

        fs.writeFile("cdrlogs.txt",content,"utf8",function(err) {
            if(err) {
                console.log("Error writing details to file:",err.message)
            } else {
                console.log("Written to file successfully")
            }
        })
    })
    .on("error", function (error) {
        console.log(error.message);
        failedRecords++
    })
    .on("finish",function() {
        console.log("Successful entries:",successRecords);
    });
        
        } else {
          console.log("wrong file format");
        }
    });

    watcher.on("error", (error) => {
        console.error(`Chokidar error: ${error.message}`)
    });








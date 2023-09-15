const fs = require('fs');
const {parse} = require('csv');
const {connection} = require("./db");
const { error } = require('console');
const chokidar = require("chokidar");
const path = require('path');
// require('mysql/lib/protocol/constants/types');
// const filepath = "cdr.log.20230818_10.csv"
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


connection.connect(function(err) {
    if (err) {
        console.log("error connecting to database: "+err.stack)
        return;
    }
    
    console.log(`connected to ${process.env.DB_DATABASE} database`);
    
        //Perform all database operations here.
        
   
});

// connect2db

  fs.createReadStream(filepath)
    .pipe(parse({delimiter:"|", from_line:1}))
    .on("data", function(row) {
        connection.query(insertquery, [row[0]," ",row[1]," ",row[2]," ",row[3]," ",row[4]," ",row[5]," ",row[6]," ",row[7]," ",row[8]," ",row[9]," ",
        row[10]," ",row[11]," ",row[12]," ",row[13]," ",row[14]," ",row[15]," ",row[16]," ",row[17]," ", row[18]," ", row[19]," ",row[20]," ",row[21]," ",row[22]," ",
        row[23]," ",row[24]," ",row[25]," ",row[26]," ",row[27]," ",row[28]," ",row[29]," ",row[30]," ",row[31]," ",row[32]," "],function(err,result) {
            if (err) {
                throw err
            } else {
                // console.log(result.affectedRows);
                // successRecords++
                    successRecords += result.affectedRows;
            
            }
            // for (let index = 0; index < row.length; index++) {
            //         successRecords += result.affectedRows;
            // }
        })
        console.log(successRecords)
    })
    .on("end", function() {
        console.log("finished");
        console.log("Successful entries:",successRecords);
        // console.log("Failed records:",failedRecords);
        const content = `Successful entries:${successRecords}\nFailed entries:${failedRecords}`;


        connection.end((error)=> {
            if (error) {
                console.log("Error closing connection:",error);
                return
            }
            console.log("MySQL connection closed");
            return
        });

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

    // bebelino

    const watcher = chokidar.watch("data",{
        ignored: /(^|[\/\\])\../,
        persistent:true
    });

    watcher.on("ready", ()=> console.log("Ready to watch files"));


    watcher.on("add", (path) => {
        if(path.endsWith(".csv")) {
          console.log("I will use you");
        //   let dickson = bebelino(path);
        //   dickson
        } else {
          console.log("wrong file format");
        }
    });

    watcher.on("error", (error) => {
        console.error(`Chokidar error: ${error.message}`)
    });








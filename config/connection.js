//import mysql from  "mysql";
 const mysql = require("mysql")
const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect((err) =>{
    if (err){
        console.log(`error connecting to database :  ${err.stack}`);
        return;
    }
    console.log(`connected with ID ${ connection.threadId}`)
});

module.exports = connection;
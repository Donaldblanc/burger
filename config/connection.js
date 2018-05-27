import mysql from  "mysql";
//  const mysql = require("mysql")

var connection;
if(process.env.JAWSDB_UR){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

}else{

     connection = mysql.createConnection({
        host:"localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}




connection.connect((err) =>{
    if (err){
        console.log(`error connecting to database :  ${err.stack}`);
        return;
    }
    console.log(`connected with ID ${ connection.threadId}`)
});

export default connection;
// module.exports = connection;
// import mysql from  "mysql";
// //  const mysql = require("mysql")

// var connection;
// if(process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL);

// }else{

//      connection = mysql.createConnection({
//         host:"localhost",
//         port: 3306,
//         user: "root",
//         password: "root",
//         database: "burgers_db"
//     });
// }



// connection.connect((err) =>{
//     if (err){
//         console.log(`error connecting to database :  ${err.stack}`);
//         return;
//     }
//     console.log(`connected with ID ${ connection.threadId}`)
// });

// export default connection;
// // module.exports = connection;



var mysql = require('mysql');

// Create the MySQL connection object
var connection = mysql.createConnection('mysql://h0vzo0sh80p5r4bq:be438oxgvml6fhbe@zf4nk2bcqjvif4in.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/pakf7aujdz7f84vl');

// if (process.env.JAWSDB_URL) {
// 	// DB is JawsDB on Heroku
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	// DB is local on localhost
// 	connection = mysql.createConnection({
// 		port: 3306,
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'root',
// 		database: 'burgers_db'
// 	})
// };


// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;
//import connection from "../config/connection.js";

const connection = require('../config/connection.js')
const orm = {
    selectAll: function(tableName, cbFunc ){
        let queryString = "SELECT * FROM " + tableName +";";
        connection.query( queryString, (err, results) => {
            if(err){
                throw err;
            }
            cbFunc(results);
        })

    }

  
}

module.exports = orm
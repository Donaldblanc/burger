import connection from "../config/connection.js";

// const connection = require('../config/connection.js')
const orm = {
    selectAll: (tableName, cbFunc ) => {
        let queryString = "SELECT * FROM " + tableName +";";
        connection.query( queryString, (err, results) => {
            if(err){
                throw err;
            }
            cbFunc(results);
        })
    },
    insertOne: () =>{
        
    }
}
export default orm
// module.exports = orm
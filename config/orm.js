import connection from "../config/connection.js";

function placeholders(num){
    var arr =[];

    for (var i =0; i < num; i++){
        arr.push("?");
    }
}

function objToSql(object){
    let arr = [];

    for(var key in object){
        let value = object[key];

        if( Object.hasOwnProperty.call(object, key)){
            if(typeof vlaue === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
        }
            arr.push(key + "=" + value);

    }
return arr.toString();
}

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
    insertOne: (tablesName, values, cbFunc) =>{
        let queryString = "INSERT INTO " + tablesName;
        queryString += "(burger)"
        queryString += "VALUES ('" + values + "')";
        connection.query(queryString, (err, results)=> {
            if(err)throw err;
              cbFunc(results);   
        });

    },
    updateOne: (tableName, condition, cbFunc) =>{ 
        let queryString = 'UPDATE ' + tableName + ' SET devoured = true WHERE id=' + condition +';';
        connection.query(queryString, (err, results)=> {
            if(err)throw err;
              cbFunc(results);   
        });
    }
}
export default orm
// module.exports = orm
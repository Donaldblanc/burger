import orm from "../config/orm.js"

// const orm = require ('../config/orm.js')

let burger = {
    all: function(cbFunc){
        orm.selectAll("burgers", (results) =>{
            cbFunc(results);
        });
    }


};

export default burger;
//module.exports = burger;
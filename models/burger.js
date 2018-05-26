import orm from "../config/orm.js"

// const orm = require ('../config/orm.js')

let burger = {
    all: function(cbFunc){
        orm.selectAll("burgers", (results) =>{
            cbFunc(results);
        });
    },
    update: function(id, cbFunc){
        orm.updateOne('burgers',id,cbFunc);
    },
    create: function(name, cbFunc) {
        orm.insertOne("burgers", name, cbFunc);
    }


};

export default burger;
//module.exports = burger;
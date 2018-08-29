// requires orm, contains all methods used to modify ORM for use in burgers_db
var orm = require("../config/orm.js");
//calling orm.all, inserting burgers as table input, 
//running function of response as a callback which will be sent back to routes file
var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        })
    }
}

module.exports = burger;
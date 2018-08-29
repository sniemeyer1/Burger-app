//importing connection
var connection = require("./connection.js");
//create object with methods that collects data, creates new data, updates data
//orm.all method: 
//creates connection query that is selecting everything from table input 
//then uses callback to pass result into next file in models folder
var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM ' +tableInput+ ';',
            function(err,result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    }
} 

module.exports = orm;

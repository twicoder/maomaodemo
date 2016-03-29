'use strict';

var mysql      = require('mysql');
var dbconfig = require('./config');
var connection = mysql.createConnection(dbconfig);


module.exports = {
    query : function(sql,func){
        connection.connect();
        connection.query(sql,function(err,rows){
            if(err) throw err;
            func(rows);
            connection.end();
        })
    }
}

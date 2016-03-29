'use strict';

var mysql      = require('mysql');
var dbconfig = require('./config');


module.exports = {
    getaboutus : function(func){
        var connection = mysql.createConnection(dbconfig);
        connection.connect();
        var sql = "select content from aboutus where name='about'";
        connection.query(sql,function(err,rows){
            if(err) throw err;
            func(rows[0]);
            connection.end();
        })
    },
    updateaboutus : function(updateContent,func){
        var connection = mysql.createConnection(dbconfig);
        connection.connect();
        // Frist delete the content
        var deleteAboutSql = "delete from aboutus where name='about'";
        connection.query(deleteAboutSql);

        var sql = "insert into aboutus(name,content) values(?,?)";
        var inserts = ['about', updateContent];
        sql = mysql.format(sql, inserts);
        connection.query(sql,function(err,rows){
            if(err) throw err;
            var sql = "select content from aboutus where name='about'";
            connection.query(sql,function(err,rows){
                if(err) throw err;
                func(rows[0]);
                connection.end();
            })
        })
    },
    getaboutus_intro : function(func){
        var connection = mysql.createConnection(dbconfig);
        connection.connect();
        var sql = "select content from aboutus where name='about_intro'";
        connection.query(sql,function(err,rows){
            if(err) throw err;
            if(rows.length==0){
                func({content:''});
            }else{
                func(rows[0]);
            }

            connection.end();
        })
    },
    updateaboutus_intro : function(updateContent,func){
        var connection = mysql.createConnection(dbconfig);
        connection.connect();
        // Frist delete the content
        var deleteAboutSql = "delete from aboutus where name='about_intro'";
        connection.query(deleteAboutSql);

        var sql = "insert into aboutus(name,content) values(?,?)";
        var inserts = ['about_intro', updateContent];
        sql = mysql.format(sql, inserts);
        connection.query(sql,function(err,rows){
            if(err) throw err;
            var sql = "select content from aboutus where name='about_intro'";
            connection.query(sql,function(err,rows){
                if(err) throw err;
                func(rows[0]);
                connection.end();
            })
        })
    },

    getaboutus_team : function(func){
        var connection = mysql.createConnection(dbconfig);
        connection.connect();
        var sql = "select content from aboutus where name='about_team'";
        connection.query(sql,function(err,rows){
            if(err) throw err;
            if(rows.length==0){
                func({content:''});
            }else{
                func(rows[0]);
            }

            connection.end();
        })
    },
    updateaboutus_team : function(updateContent,func){
        var connection = mysql.createConnection(dbconfig);
        connection.connect();
        // Frist delete the content
        var deleteAboutSql = "delete from aboutus where name='about_team'";
        connection.query(deleteAboutSql);

        var sql = "insert into aboutus(name,content) values(?,?)";
        var inserts = ['about_team', updateContent];
        sql = mysql.format(sql, inserts);
        console.log("####################################");
        console.log(sql);
        console.log("####################################");
        connection.query(sql,function(err,rows){
            if(err) throw err;
            var sql = "select content from aboutus where name='about_team'";
            connection.query(sql,function(err,rows){
                if(err) throw err;
                func(rows[0]);
                connection.end();
            })
        })
    },

    getaboutus_hire : function(func){
        var connection = mysql.createConnection(dbconfig);
        connection.connect();
        var sql = "select content from aboutus where name='about_hire'";
        connection.query(sql,function(err,rows){
            if(err) throw err;
            if(rows.length==0){
                func({content:''});
            }else{
                func(rows[0]);
            }

            connection.end();
        })
    },
    updateaboutus_hire : function(updateContent,func){
        var connection = mysql.createConnection(dbconfig);
        connection.connect();
        // Frist delete the content
        var deleteAboutSql = "delete from aboutus where name='about_hire'";
        connection.query(deleteAboutSql);

        var sql = "insert into aboutus(name,content) values(?,?)";
        var inserts = ['about_hire', updateContent];
        sql = mysql.format(sql, inserts);
        console.log("####################################");
        console.log(sql);
        console.log("####################################");
        connection.query(sql,function(err,rows){
            if(err) throw err;
            var sql = "select content from aboutus where name='about_hire'";
            connection.query(sql,function(err,rows){
                if(err) throw err;
                func(rows[0]);
                connection.end();
            })
        })
    },
}
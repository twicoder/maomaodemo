var express = require('express');
var router = express.Router();
var aboutpage = require('../db/aboutpage');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin/admin', {title: 'Express', mainbody: ' 管理页面 ' });
});

/* GET users listing. */
router.get('/about', function(req, res, next) {
    var func = function(data){
        if(data==null){
            data={"content":""};
        }
        console.log(data.content);
        res.render('admin/about', {title: 'Express', mainbody: data.content });
    }
    aboutpage.getaboutus(func);
});

/* POST users listing. */
router.post('/about', function(req, res, next) {
    var aboutcontent=req.body.content;
    var func = function(data){
        if(data==null){
            data={"content":""};
        }
        res.render('admin/about', {title: 'Express', mainbody: data.content });
    }
    aboutpage.updateaboutus(aboutcontent,func);

});

////////////////////// Introduction

/* GET users listing. */
router.get('/about/intro', function(req, res, next) {
    var func = function(data){
        if(data==null){
            data={"content":""};
        }
        res.render('admin/about_intro', {title: 'Express', mainbody: data.content });
    }
    aboutpage.getaboutus_intro(func);
});

/* POST users listing. */
router.post('/about/intro', function(req, res, next) {
    var aboutcontent=req.body.content;
    var func = function(data){
        if(data==null){
            data={"content":""};
        }
        res.render('admin/about_intro', {title: 'Express', mainbody: data.content });
    }
    aboutpage.updateaboutus_intro(aboutcontent,func);

});

/* GET users listing. */
router.get('/about/team', function(req, res, next) {
    var func = function(data){
        if(data==null){
            data={"content":""};
        }
        res.render('admin/about_team', {title: 'Express', mainbody: data.content });
    }
    aboutpage.getaboutus_team(func);
});

/* POST users listing. */
router.post('/about/team', function(req, res, next) {
    var aboutcontent=req.body.content;
    var func = function(data){
        if(data==null){
            data={"content":""};
        }
        res.render('admin/about_team', {title: 'Express', mainbody: data.content });
    }
    aboutpage.updateaboutus_team(aboutcontent,func);

});

/* GET users listing. */
router.get('/about/hire', function(req, res, next) {
    var func = function(data){
        if(data==null){
            data={"content":""};
        }
        res.render('admin/about_hire', {title: 'Express', mainbody: data.content });
    }
    aboutpage.getaboutus_hire(func);
});

/* POST users listing. */
router.post('/about/hire', function(req, res, next) {
    var aboutcontent=req.body.content;
    var func = function(data){
        if(data==null){
            data={"content":""};
        }
        res.render('admin/about_hire', {title: 'Express', mainbody: data.content });
    }
    aboutpage.updateaboutus_hire(aboutcontent,func);

});

module.exports = router;

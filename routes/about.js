var express = require('express');
var router = express.Router();
var aboutpage = require('../db/aboutpage');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var func = function(data){
        res.render('about/about', {title: 'Express', mainbody: data.content });
    }
    aboutpage.getaboutus(func);

});

/* GET users listing. */
router.get('/intro', function(req, res, next) {
    var func = function(data){
        res.render('about/intro', {title: 'Express', mainbody: data.content });
    }
    aboutpage.getaboutus_intro(func);
});

/* GET users listing. */
router.get('/team', function(req, res, next) {
    var func = function(data){
        res.render('about/team', {title: 'Express', mainbody: data.content });
    }
    aboutpage.getaboutus_team(func);
});

/* GET users listing. */
router.get('/hire', function(req, res, next) {
    var func = function(data){
        res.render('about/hire', {title: 'Express', mainbody: data.content });
    }
    aboutpage.getaboutus_hire(func);
});

/* GET users listing. */
router.get('/contact', function(req, res, next) {
    res.render('about/contact', { title: 'Express' });
});


module.exports = router;

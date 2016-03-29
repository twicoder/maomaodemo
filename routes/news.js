var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('news/news', {title: 'Express', mainbody: ' 新闻内容 ' });
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('products/products', {title: 'Express', mainbody: ' 主体内容 ' });
});


module.exports = router;

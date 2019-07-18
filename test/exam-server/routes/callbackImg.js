var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/uploads/*',function(req, res, next) {
    var imgUrl=req.url.replace('/','');
    //     console.log(imgUrl);
    // console.log(__dirname);
    var vueImgUrl=(__dirname).replace('routes','')+imgUrl;
    // console.log(vueImgUrl)
    res.sendFile(vueImgUrl);
    // console.log("Request for " + req.url + " received.");

});

module.exports = router;
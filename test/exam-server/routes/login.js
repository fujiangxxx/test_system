var express = require('express');
var router = express.Router();
var md5=require("./md5");
var mysql=require("./mysql");
console.log(mysql)
/* GET home page. */
router.get('/check', function(req, res, next) {
  var uname=req.query.uname;
  var upass=md5(req.query.upass);
  var sql=`select * from user where uname='${uname}' and upass='${upass}'`;
  // console.log(sql);
  mysql.query(sql,function (err,result) {
      if(err){
          var obj={message:"err"};
          res.end(JSON.stringify(obj));
      }else{
          if(result.length>0){
              var obj={message:"yes",id:result[0].id,uname:uname};
              res.end(JSON.stringify(obj));
          }else{
              var obj={message:"err"};
              res.end(JSON.stringify(obj));
          }
      }
  });
});

module.exports = router;

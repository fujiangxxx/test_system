var express = require('express');
var router = express.Router();
var md5=require("../md5");
var mysql=require("../mysql");
/* GET home page. */
router.get('/login', function(req, res, next) {

  var uname=req.query.name;
  var upass=md5(req.query.pass);
  console.log(uname)
  var sql=`select * from stu where name='${uname}' and pass='${upass}'`;
  mysql.query(sql,function (err,result) {
      if(err){
          var obj={message:"err"};
          res.end(JSON.stringify(obj));
      }else{
          if(result.length>0){
              mysql.query('select * from classes',function(err,result1){
                  var json={};
                  for(var i=0;i<result1.length;i++){
                      json[result1[i].id]=result1[i].name;
                  }
                  var sexWord=result[0].sex;
                  switch(sexWord){
                      case 1:
                          sexWord="男" ;
                          break;
                      case 3:
                          sexWord="女" ;
                          break;
                      case 2:
                          sexWord="保密" ;
                  }
                  var obj={message:"yes",id:result[0].id,name:uname,cid:result[0].cid,class:json[result[0].cid],headPhoto:result[0].headPhoto,sex:sexWord};
                  res.end(JSON.stringify(obj));
              });

          }else{
              var obj={message:"err"};
              res.end(JSON.stringify(obj));
          }
      }
  });
});

router.get("/editpass",function (req,res) {
    var id=req.query.id;
    var pass1=md5(req.query.pass1);
    var pass2=md5(req.query.pass2);
    // console.log(pass2);
    mysql.query("select * from stu where id="+id,function (err,result) {
        if(result[0].pass == pass1){
            var sql=`update stu set pass='${pass2}' where stu.id ='${id}'`;
            mysql.query(sql,function (err,result){
              if(result){
                  res.end('ok');
              }else{
                  res.end('err');
              }
            });
        }else{
                res.end('err');
        }
    });
})

module.exports = router;

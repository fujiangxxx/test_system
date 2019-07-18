var express = require('express');
var router = express.Router();
var md5=require("../md5");
var mysql=require("../mysql");

/* GET home page. */
router.get('/login', function(req, res, next) {
  var uname=req.query.name;
  var upass=md5(req.query.pass);
  var sql=`select * from teach where name='${uname}' and pass='${upass}'`;
  mysql.query(sql,function (err,result) {
      if(err){
          var obj={message:"err"};
          res.end(JSON.stringify(obj));
      }else{
          if(result.length>0){
            //处理班级
              mysql.query('select * from classes',function(err,result1) {
                  // console.log(result1);
                  var json = {};
                  for (var i = 0; i < result1.length; i++) {
                      json[result1[i].id] = result1[i].name;
                  }
                  var teachClass = json[result[0].cid];
                  //处理教学方向
                  mysql.query('select * from fangxiang', function (err, result2) {
                      // console.log(result2);
                      var teacDection = {};
                      for (var i = 0; i < result2.length; i++) {
                          teacDection[result2[i].fid] = result2[i].fname;
                      }
                      // console.log(teacDection);
                      var teacDec = teacDection[result[0].fid];
                      //处理性别
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
                              break;
                      }
                      var obj = {
                          message: "yes",
                          id: result[0].id,
                          name: uname,
                          headPhoto: result[0].headPhoto,
                          cid:result[0].cid,
                          teachClass: teachClass,
                          fangxiang: teacDec,
                          sex:sexWord
                      };
                      res.end(JSON.stringify(obj));
                  });
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
    mysql.query("select * from teach where id="+id,function (err,result) {
        if(result[0].pass == pass1){
            var sql=`update teach set pass='${pass2}' where teach.id ='${id}'`;
            mysql.query(sql,function (err,result){
                if(result.affectedRows>0){
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

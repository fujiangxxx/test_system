var express = require('express');
var router = express.Router();
var mysql=require("./mysql")

/* GET home page. */
router.get('/addType', function(req, res, next) {
   var typename=(req.query.typename);
   mysql.query("insert into type (typename) values ('"+typename+"')",function (err,result) {
       if(err){
         res.end("err");
       }else{
         if(result.affectedRows>0){
           res.end("ok");
         }else{
           res.end("err");
         }
       }
   })
});

router.get("/select",function (req,res) {

    mysql.query("select * from type",function (err,result) {
      res.end(JSON.stringify(result));
    })
});
router.get('/del',function(req,res){
    var tid=req.query.typeid;
    console.log(tid);
    var sql=`delete from type where typeid='${tid}'`;
    mysql.query(sql,function(err,result){
        if(err){
            res.send("err");
        }else{
            if(result.affectedRows>0){
                res.send("ok")
            }
        }
    })
});
router.get('/editSelect',function(req,res){
    var tid=req.query.tid;
    var sql=`select * from type where typeid='${tid}'`;
    mysql.query(sql,function(err,result){
        res.send(JSON.stringify(result[0]));
    })
});
router.get('/edit',function(req,res){
    var tid=req.query.tid;
    var tname=req.query.tname;
    var sql=`update type set typename='${tname}' where typeid='${tid}'`;
    mysql.query(sql,function(err,result){
        if(result.affectedRows>0){
            res.send('ok');
        }
    })
})

module.exports = router;

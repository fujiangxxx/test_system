var express = require('express');
var router = express.Router();
var multer  = require('multer');
var md5=require("./md5");
var mysql=require("./mysql");
var xlsx=require("node-xlsx");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/stu');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+"-"+file.originalname);
    }
})

var upload = multer({ storage: storage });
/* GET home page. */
router.get('/signStu', function(req, res, next) {
    var name=req.query.name;
    var cid=req.query.cid;
    var sex=req.query.sex;
    // console.log(sex);
    var pass=md5("123456");

    mysql.query(`insert into stu (name,pass,cid,sex,headPhoto) values ('${name}','${pass}','${cid}','${sex}','')`,function (err,result) {
        console.log(result);
        if(result.affectedRows>0){
            res.end("ok");
        }else{
            res.end("err");
        }
    });
});

router.post("/upload",upload.single("aa"),function (req,res) {
    var datas=(xlsx.parse(req.file.path))[0].data;
    // console.log(datas);
     mysql.query("select * from classes",function (err,result) {
         /**处理班级**/
         var json={};
         for(var i=0;i<result.length;i++){
             json[result[i].name]=result[i].id;
         }
         /**处理性别**/
         // var dealSex={};
         // console.log(json);
         var arr=[];
         for(var i=1;i<datas.length;i++){
            var arr1=[];
            arr1.push(datas[i][0]);
            arr1.push(md5("123456"));
            // console.log(datas[i][1]);
            arr1.push(json[datas[i][1]]);
            var obj=datas[i][2];
             switch(obj){
                 case "男":
                     obj=1 ;
                     break;
                 case "女":
                     obj=3 ;
                     break;
                 case "保密":
                     obj=2 ;
                     break;
             }
             // console.log(obj);
            arr1.push(obj);
            arr.push(arr1);

         }
         console.log(arr);
         mysql.query("insert into stu (name,pass,cid,sex) values ?",[arr],function (err,result) {
             if(!err){
                 res.end("ok");
             }else{
                 res.end("err");
             }
         });
     });
})

router.get("/selectAll",function (req,res) {
    var like=req.query.like?"where stu.name like '%"+req.query.like+"%'":''
    mysql.query("select * from stu "+like,function (err,result) {
        if(err){
            res.end(JSON.stringify({message:"err"}));

        }else{
            res.end(Math.ceil(result.length/10).toString());
        }
    });
});
router.get("/select",function (req,res) {
    var start=req.query.page*10;
    var like=req.query.like?"and stu.name like '%"+req.query.like+"%'":''
    var sql="select stu.*,classes.name as cname from stu,classes where stu.cid=classes.id "+ like+" limit "+start+",10"
    mysql.query(sql,function (err,result) {
        if(err){
            res.end(JSON.stringify({message:"err"}));
        }else{
            res.end(JSON.stringify(result));
        }
    });
})

module.exports = router;

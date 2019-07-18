var express = require('express');
var router = express.Router();
var multer  = require('multer');
var md5=require("./md5")
var mysql=require("./mysql");
var xlsx=require("node-xlsx");
//提示  性别存储  男 1   女  3   保密  2
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/teach');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+"-"+file.originalname);
    }
})

var upload = multer({ storage: storage });


/* GET home page. */
router.get('/signTe', function(req, res, next) {
    var name=req.query.name;
    var cid=req.query.cid;
    var fid=req.query.fid;
    var sex=req.query.sex;
    var pass=md5("123456");
    console.log(sex);
    var sql=`insert into teach (name,pass,cid,fid,sex,headPhoto) values ('${name}','${pass}','${cid}','${fid}','${sex}','')`;
    console.log(sql);
    mysql.query(sql,function (err,result) {
        if(result.affectedRows>0){
            res.end("ok");
        }else{
            res.end("err");
        }
    });
});

router.post("/upload",upload.single("aa"),function (req,res) {
    var datas=(xlsx.parse(req.file.path))[0].data;
    console.log(datas);
    mysql.query("select * from classes",function (err,result) {
        /**处理班级**/
        var json={};
        for(var i=0;i<result.length;i++){
            json[result[i].name]=result[i].id;
        }
        console.log(json);
        /**处理方向**/
        mysql.query("select * from fangxiang",function(err,result1){
            var teachDec={};
            for(var i=0;i<result1.length;i++){
                teachDec[result1[i].fname]=result[i].fid;
            }
           console.log(teachDec)
        var arr=[];
        for(var i=1;i<datas.length;i++){
            var arr1=[];
            arr1.push(datas[i][0]);
            arr1.push(md5("123456"));
            // console.log(datas[i][1]);
            arr1.push(json[datas[i][1]]);
            arr1.push(teachDec[datas[i][2]])
            var obj=datas[i][3];
            switch(obj){
                case "男":
                    obj="1" ;
                    break;
                case "女":
                    obj="3" ;
                    break;
                case "保密":
                    obj="2" ;
                    break;
            }
            // console.log(obj);
            arr1.push(obj);
            arr.push(arr1);

        }
        console.log(arr);
        mysql.query("insert into teach (name,pass,cid,fid,sex) values ?",[arr],function (err,result) {
            if(!err){
                res.end("ok");
            }else{
                res.end("err");
            }
        });
    });
    });
});
//获取全部教师信息
router.get("/selectAll",function (req,res) {
    var like=req.query.like?"where teach.name like '%"+req.query.like+"%'":''
    mysql.query("select * from teach "+like,function (err,result) {
        if(err){
            res.end(JSON.stringify({message:"err"}));

        }else{
            res.end(Math.ceil(result.length/10).toString());
        }
    });
})



router.get("/select",function (req,res) {
    var start=req.query.page*10;
    var like=req.query.like?"and teach.name like '%"+req.query.like+"%'":''
    var sql="select teach.*,classes.name as cname, fangxiang.fname from teach,classes,fangxiang where teach.cid=classes.id and teach.fid=fangxiang.fid "+ like+" limit "+start+",10"

    mysql.query(sql,function (err,result) {
        if(err){
            res.end(JSON.stringify({message:"err"}));
        }else{

            res.end(JSON.stringify(result));
        }
    });
});
//修改教师个人信息

module.exports = router;

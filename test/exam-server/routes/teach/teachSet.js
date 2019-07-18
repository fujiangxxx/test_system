var express = require('express');
var router = express.Router();
var md5=require("../md5");
var mysql=require("../mysql");
var multer=require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },

    /*以时间戳命名的文件*/
    filename: function (req, file, cb) {
        // console.log(file.originalname);
        cb(null, Date.now()+"-"+file.originalname);
    }

});
var upload = multer({storage: storage}).any();
/**上传头像**/
router.post('/uploadImg',upload,function(req,res){
    console.log(req.files[0]);
    var headPhoto=req.files[0].path;
    var str1=headPhoto.replace("s","s/");
    // console.log(str1)
    // console.log(typeof headPhoto);
    // console.log(headPhoto)
    var id=req.body.id;
    console.log(id);
    var sql=`update teach set headPhoto='${str1}' where id='${id}'`;
    mysql.query(sql,function(err,result){
        if(result.affectedRows>0){
            mysql.query(`select * from teach where id='${id}'`,function(err3,result3){
                if(result3.length>0){
                    // console.log(1)
                    mysql.query('select * from classes',function(err,result1) {
                        // console.log(result1);
                        var json = {};
                        for (var i = 0; i < result1.length; i++) {
                            json[result1[i].id] = result1[i].name;
                        }
                        console.log(json)
                        var teachClass = json[result3[0].cid];
                        console.log(teachClass)
                        //处理教学方向
                        mysql.query('select * from fangxiang', function (err, result2) {
                            // console.log(result2);
                            var teacDection = {};
                            for (var i = 0; i < result2.length; i++) {
                                teacDection[result2[i].fid] = result2[i].fname;
                            }
                            // console.log(teacDection);
                            var teacDec = teacDection[result3[0].fid];
                            //处理性别
                            var sexWord=result3[0].sex;
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
                                id: result3[0].id,
                                name: result3[0].name,
                                headPhoto: result3[0].headPhoto,
                                cid:result3[0].cid,
                                teachClass: teachClass,
                                fangxiang: teacDec,
                                sex:sexWord
                            };
                            // console.log(obj);
                            res.end(JSON.stringify(obj));
                        });
                    });
                }
                if(err3){
                    res.end(JSON.stringify({message:'err'}));
                }
            });

        }else{
            res.end('err');
        }
    });
});
/**保存用户信息**/
router.get('/saveInfo',function(req,res){
    var id=req.query.id;
    var name=req.query.name;
    var sex=req.query.sex;
    var cid=req.query.cid;
    // console.log(id+name+sex+cid);
    switch(sex){
        case "男":
            sex=1;
            break;
        case "女":
            sex=3;
            break;
        case "保密":
            sex=2;
            break;
    }
    var sql=`update teach set name='${name}',sex='${sex}',cid='${cid}' where id='${id}'`;
    mysql.query(sql,function(err,result){
        if(result.affectedRows>0){
            mysql.query(`select * from teach where id='${id}'`,function(err3,result3){
                if(result3.length>0){
                    // console.log(1)
                    mysql.query('select * from classes',function(err,result1) {
                        // console.log(result1);
                        var json = {};
                        for (var i = 0; i < result1.length; i++) {
                            json[result1[i].id] = result1[i].name;
                        }
                        console.log(json)
                        var teachClass = json[result3[0].cid];
                        console.log(teachClass)
                        //处理教学方向
                        mysql.query('select * from fangxiang', function (err, result2) {
                            // console.log(result2);
                            var teacDection = {};
                            for (var i = 0; i < result2.length; i++) {
                                teacDection[result2[i].fid] = result2[i].fname;
                            }
                            // console.log(teacDection);
                            var teacDec = teacDection[result3[0].fid];
                            //处理性别
                            var sexWord=result3[0].sex;
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
                                id: result3[0].id,
                                name: name,
                                headPhoto: result3[0].headPhoto,
                                cid:result3[0].cid,
                                teachClass: teachClass,
                                fangxiang: teacDec,
                                sex:sexWord
                            };
                            // console.log(obj);
                            res.end(JSON.stringify(obj));
                        });
                    });
                }
                if(err3){
                    res.end(JSON.stringify({message:'err'}));
                }
            });

        }
        if(err){
            var obj={message:'err'};
            res.end(JSON.stringify(obj));
        }
    });
})
module.exports = router;
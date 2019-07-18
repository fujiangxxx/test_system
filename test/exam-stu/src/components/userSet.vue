<template>
    <div>
        <!--上传头像的遮罩-->
        <div id="uploadPhoto">
            <div class="zheBox"></div>
            <div class="input-button">
                <div class="inputForPhoto">
                    <!--照相机-->
                    <div class="teleCamera">
                        <div class="cameraWord">
                            <span>拍照</span>
                        </div>
                        <div class="mug"><i class="el-icon-camera-solid"></i></div>
                        <input type="file" id='cameraImage'  accept="image/*" capture='camera' multiple @change="changeImg($event)">
                    </div>
                    <!--本地图库-->
                    <div class="teleCamera">
                        <div class="localPhoto">
                            <span>照片图库</span>
                        </div>
                        <div class="mugIcon"><i class="el-icon-picture"></i></div>
                        <input type="file" id='localImage'    accept="image/*;"      @change="changeImg($event)">
                    </div>
                </div>

                <div class="cancelBut" @click="cancelBut">
                    <span>取消按钮</span>
                </div>
            </div>
        </div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
            <h1 class="mui-title">完善信息</h1>
        </header>
        <div class="mui-content">

            <ul class="mui-table-view">
                <li class="mui-table-view-cell" id="headPhoto" @click="photoChoice">
                    <div class="infoContent">
                        <img :src="putImg" alt="">
                    </div>
                    头像
                </li>
                <li class="mui-table-view-cell">
                    <div class="infoContent">
                        <span>{{uname}}</span>
                    </div>
                    <router-link class="mui-navigate-right" to="/editName">姓名</router-link>
                </li>
                <li class="mui-table-view-cell">
                    <div class="infoContent">
                        <span>{{sex}}</span>
                    </div>
                    <router-link class="mui-navigate-right" to="/editSex">
                      性别</router-link>
                </li>
                <li class="mui-table-view-cell">
                    <div class="infoContent">
                        <span>{{stuClass}}</span>
                    </div>
                    <router-link class="mui-navigate-right" to="/editClass">
                        班级</router-link>
                </li>
            </ul>
        </div>
        <div class="updateSet">
                <el-button class="updateBut" type="danger" round @click="saveInfo">保存设置</el-button>
        </div>


    </div>
</template>
<script>
   import $ from 'jquery'
   import animate from 'animate.css'
    export default {
        name: 'userSet',
        data() {
            return {
                id: (JSON.parse(sessionStorage.getItem("stuLogin"))).id,
//                头像
                putImg:JSON.parse(sessionStorage.getItem("stuLogin")).headPhoto==""  ?  ""  :  this.$imgUrls+JSON.parse(sessionStorage.getItem("stuLogin")).headPhoto,
                user:""
            }
        },
        methods: {
            back(e) {
                this.$router.go(-1);
            },
//            弹出照相机和图片库
            photoChoice() {
                $('#uploadPhoto').css('display','block')
            },
            //取消选择照相机和图片库
            cancelBut() {
                var uploadPhoto = document.getElementById('uploadPhoto');
                uploadPhoto.style.display = 'none';
            },
//            //调用照相机
            changeImg: function (e) {
                let file = e.target.files[0];
                let params=new FormData();
                params.append('file',file,file.name);
                params.append('id',this.id);
                this.axios({
                    method:'POST',
                    url:'/api/stuSet/uploadImg',
                    headers:{'Content-Type':'multipart/form-data'},
                    anync: true,
                    contentType: false,
                    processData: false,
                    data: params,
                }).then(function(res){
                    console.log(res)
                    sessionStorage.setItem('stuLogin',JSON.stringify(res.data))
                    this.$router.go(0);
                    $('.mui-content').addClass('animated bounceOutLeft');
                    $('#uploadPhoto').css('display','none');
                }.bind(this))
                    .catch(function (err) {
                        console.log(err);
                    });
//                console.log(file)
//                if (file) {
//                    this.file = file;
//                    //通过构造函数初始化一个FileReader对象
//                    let reader = new FileReader();
//                    let that = this;
//                    //FileReader.readAsDataURL()开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容。
//                    reader.readAsDataURL(file);
//                    reader.onload = function (e) {
//                        // 这里的this 指向reader
//                        that.putImg = this.result
//                        console.log(that.file.name);
//                        let param=new FormData();
//                        console.log(that.id);
//                        param.append('id',that.id);
//                        param.append('file',that.putImg,that.putImg.name);
//                        let config = {
//                            headers:{'Content-Type':'multipart/form-data'}
//                        };
//                        console.log(param);
//                        this.$axios.post({
//                          param,config
//                        }).then(function(res){
//                            console.log(res);
//                        })
//
//                    }
//                }
//                    console.log(this.putImg);
//
//                let size=this.file.size;
//                console.log(size);
//                if(size>3145728) {
//                    alert("请选择3M以内的图片!");
//                    return false;
//                }
//                var  imgUrl="";
//                let form=new FormData();
//                form.append('file',file,file.name);
////                console.log(form)
//                var opts={
//                    methods:"POST",
//                    body:form,
//                    headers:{
//                        'Content-Type': 'multipart/form-data',
//                    }
//                }
//                fetch('/api/teachSet/uploadImg',opts).then(function(e){
//                    return e.json()
//                }).then((e)=>{
//
//                })
            },
            saveInfo(){
                var params='id='+this.id+'&name='+this.uname+'&sex='+this.sex+'&cid='+this.cid;
                console.log(params)
                fetch('/api/stuSet/saveInfo?'+params).then(function(e){
                    return e.json();
                }).then((e)=>{
//                    console.log(e);
                    this.$router.go(0);
                    $('.mui-content').addClass('animated bounceOutLeft');
                    this.$store.commit('updateUserInfo',e);
                    this.$store.commit('updateUname',{updateUnameed:""});
                    this.$store.commit("updateUclass",{uclass:"",ucid:""});
                    this.$store.commit("updateUsex",{updateUsexed:""});
                })
            }

        },
        mounted:function () {

        },
        created(){
            this.user=this.$comon.user();
        },
        computed:{
            uname(){
                return this.$store.state.updateUnameed=="" ? this.user.name : this.$store.state.updateUnameed
            },
            sex(){
                return this.$store.state.updateUsexed=="" ? this.user.sex : this.$store.state.updateUsexed
            },
            stuClass(){
                return this.$store.state.updateUclassed=="" ? this.user.class : this.$store.state.updateUclassed
            },
            cid(){
                return this.$store.state.ucid=="" ? this.user.cid : this.$store.state.ucid
            }
        }
    }
</script>
<style scoped>
    body{
        color:black;
        overflow: hidden;
    }
    .box{
        width: 10rem;
        height:10rem;
        background: black;
    }
    .stuInfo{
        width: 100%;
        height:auto;
        background: #FFFFFF;
        color:#7D8184;
        font-size:18px;
        overflow: hidden;
    }
    header{
        position: fixed;
        top:0;
    }
    .mui-content > .mui-table-view:first-child
    {
        margin-top: 0px;
    }
    .mui-table-view-cell{
        position: relative;
    }
    .infoContent{
        width: 1.3rem;
        height: 0.6rem;
        font-size: 14px;
        position: absolute;
        text-align: center;
        line-height: 0.6rem;
        right:0.9rem;
        top:0;
        margin-top: 0.08rem;
        overflow:hidden;word-break:keep-all;white-space:nowrap;text-overflow:ellipsis;
    }
    .infoContent span{

    }
    .infoContent img{
        display: block;
        width: 0.6rem;
        height:100%;
        background: #E8E8E8;
        position: absolute;
        left: 0;
        right:0;
        top:0;
        bottom: 0;
        margin: auto;
        border-radius: 50%;
    }
    /**上传头像的遮罩**/
    #uploadPhoto{
        z-index:1000;
        width: 100vw;
        height:100vh;

        /*position: relative;*/
        position: absolute;
        top:0;
        left:0;
        display: none;
    }
    .zheBox{
        width: 100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        background: #999999;
        opacity: 0.6;
    }

    .input-button{
        width: 100vw;
        height:18vh;
        /*background: cyan;*/
        position: absolute;
        left:0;
        bottom: 0;
        opacity: 1;
        overflow: hidden;
        z-index:200;
    }
    /*拍照或本地图库*/
    .inputForPhoto{
        width: 95vw;
        height:10vh;
        margin: 0.2rem;

        background: #FFFFFF;
        border-radius: 0.2rem;
        box-sizing: border-box;
    }
    /*拍照*/
    .localLibrary{
        width: 100%;
        height:5vh;
        border-bottom:1px solid #9f9f9f;
        overflow: hidden;
        position: relative;
    }
    .localPhoto{
        float: left;
        width: 30vw;
        height:100%;
    }
    .localPhoto span{
        display: block;
        font-size: 18px;
        font-weight: 500;
        color:#000000;
        line-height:5vh;
        text-align: center;
    }
    #cameraImage{
        width: 100%;
        height:5vh;
        opacity: 0;
        zoom: 1;
        position: absolute;
        left:0;
        top:0;
    }
    .mug{
        float: right;
        font-size: 28px;
        color:#4ea3ff;
        line-height: 5vh;
        margin-right: 0.4rem;
    }
    /*本地图库*/
    .teleCamera{
        width: 100%;
        height:5vh;
        border-bottom:1px solid #9f9f9f;
        overflow: hidden;
        position: relative;
    }
    .cameraWord{
        float: left;
        width: 20vw;
        height:100%;
    }
    .cameraWord span{
        display: block;
        font-size: 18px;
        font-weight: 500;
        color:#000000;
        line-height:5vh;
        text-align: center;
    }
    #localImage{
        width: 100%;
        height:5vh;
        opacity: 0;
        zoom: 1;
        position: absolute;
        left:0;
        top:0;
    }
    .mugIcon{
        float: right;
        font-size: 28px;
        color:#4ea3ff;
        line-height: 5vh;
        margin-right: 0.4rem;
    }
    /*取消按钮*/
    .cancelBut{
        width: 95vw;
        height:5vh;
        margin:0.2rem;
        background:#FFFFFF;
        border-radius: 0.2rem;
    }
    .cancelBut span{
        display: block;
        width: 100%;
        height:100%;
        line-height: 5vh;
        text-align: center;
    }
    .updateSet{
        position: absolute;
        left:0;
        bottom: 0.04rem;
        width: 100%;
        height:0.5rem;

    }
    .updateBut{
        width: 90%;
        height:100%;
        position: absolute;
        top:0;
        left: 0;
        bottom:0;
        right:0;
        margin:auto;
        line-height: 0.1rem;

    }

</style>
<template>
     <div class="box">
            <div class="photo">

            </div>

            <username
              top="2.5rem"
              placeholder="请输入学生名"
              type="text"
              icon="mui-icon-person"
              @getval="getval"
              prop="name"
            ></username>

            <username
                top="0.3rem"
                placeholder="请输入密码"
                type="password"
                icon="mui-icon-locked"
                @getval="getval"
                prop="pass"
            ></username>
          <!--<div class="authCode">-->
              <!--<input id="codeInput"  type="text" placeholder="请输入验证码" v-model="authCode">-->
              <!--<div id="codeBox" style="width: 1.6rem;height: 0.88rem;"></div>-->
          <!--</div>-->
          <!--<p class="codeMessage">{{message}}</p>-->
          <div class="btn" @click="submit">
              Login
          </div>
     </div>
</template>
<script>
    import username from "@/components/input.vue"
//    import VeriCode from '@/assets/js/code2.js'
    export default {
        name: "login",
        components:{username},
        data(){
          return {
             authCode:"",
             message:""
          }
        },

//        mounted:function(){
//        var codeCanvas=new GVerify("codeBox");
//        console.log(codeCanvas)
//        },
        methods:{
            getval(attr,name){
                this[attr]=name;
            },
            submit(){
              var params="name="+this.name+"&pass="+this.pass;
//                console.log(this.authCode);
//                var res=codeCanvas.validate(this.authCode);
//                if(res){
//                    message:"验证码正确"
//                }else{
//                    message:"验证码错误"
//                }

                        fetch("/api/stuLogin/login?"+params).then(function (e) {
                            return e.json();
                        }).then((e)=>{
//                            console.log(e);
                            this.$store.commit("setUserInfo",e)
                            this.$router.push("/");
                        })
            }

        }
    }
</script>

<style scoped>


     .box{
         width:100vw;
         height:100vh;
         background: url("../assets/img/bg-img.png") center no-repeat;
         background-size: cover;
         float:left;
     }
     .mui-icon{
         color:#fff;
     }
    .photo{
        width:1.2rem;height:1.2rem;
        border:3px solid #fff;
        margin:auto;
        border-radius: 50%;
        position: relative;
        margin-top:2.35rem;
        background: url('../assets/img/student.jpeg') center no-repeat;
        background-size: cover;
    }
    /*.authCode{*/
        /*width:5.65rem;*/
        /*height:0.88rem;*/
        /*margin-top: 0.3rem;*/
        /*margin-right:auto;*/
        /*margin-left: auto;*/
        /*overflow: hidden;*/
        /*!*border: 1px solid black;*!*/

        /*!*border-radius: 0.2rem;*!*/
    /*}*/
    /*#codeInput{*/
        /*width:3.5rem;*/
        /*height:0.88rem;*/
        /*float: left;*/
        /*border:1px solid #fff;*/
        /*border-radius: 0.2rem;*/
        /*background-color: rgba(255,0,0,0);*/
        /*outline: none;*/
    /*}*/
     /*#codeInput::-webkit-input-placeholder {*/
                 /*!* placeholder颜色  *!*/
                      /*color: #aab2bd;*/
               /*!* placeholder字体大小  *!*/
                 /*font-size: 17px;*/
                 /*!* placeholder位置  *!*/
                /*text-align:left;*/
             /*}*/
     /*#codeBox{*/
         /*!*width:1.6rem;*!*/
         /*!*height: 0.88rem;*!*/
         /*float: right;*/
         /*font-size: 35px;*/
         /*text-align: center;*/
         /*line-height: 0.88rem;*/
         /*!*padding: 0.1rem 0.1rem 0.1rem 0.1rem;*!*/
     /*}*/
     /*.codeMessage{*/
         /*width:5.65rem;*/
         /*height:0.2rem;*/
         /*text-align: center;*/
         /*line-height: 0.2rem;*/
         /*color: yellow;*/
         /*margin-top: 0.3rem;*/
         /*margin-right:auto;*/
         /*margin-left: auto;*/
     /*}*/
    .btn{
        width:5.65rem;
        height:0.88rem;
        margin:auto;
        margin-top:0.3rem;
        border-radius: 0.2rem;
        text-align: center;
        line-height: 0.88rem;
        color:#fff;
        background:#ff2672 ;
    }
     .btn:active{
         box-shadow: 0 0 5px #000;
     }

</style>
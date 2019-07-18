<template>
     <div class="box">
            <div class="photo">

            </div>
            <username
              top="3.9rem"
              placeholder="请输入教师名"
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
         <!--验证码-->
         <!--<div class="demo-input-suffix">-->
             <!--<el-input-->
                     <!--placeholder="请输入内容"-->
                     <!--v-model="authCode">-->
                 <!--<i slot="prefix" class="el-icon-key"></i>-->
             <!--</el-input>-->
         <!--</div>-->

              <!--el-icon-key-->

          <div class="buttons" @click="submit">
              Login
          </div>
     </div>
</template>

<script>
    import username from "@/components/input.vue"
    export default {
        name: "login",
        components:{username},
        data(){
          return {

          }
        },
        methods:{
            getval(attr,name){
                this[attr]=name;
            },
            submit(){
                var params="name="+this.name+"&pass="+this.pass
                fetch("/api/ctl/login?"+params).then(function (e) {
                    return e.json()
                }).then((e)=>{
//                    console.log(userInfo)
                    this.$store.commit('setUserInfo',e);
                     this.$router.push("/")

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
        background: url('../assets/img/teacher.jpg') center no-repeat;
        background-size: cover;
    }


    .buttons{
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
     .buttons:active{
         box-shadow: 0 0 5px #000;
     }

</style>
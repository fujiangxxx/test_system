<template>
    <div id="box">
      <div class="loginList">
        <div class="title">管理员登陆页</div>
        {{message}}
        <el-form :label-position="labelPosition" label-width="80px" :model="rule">
            <el-form-item label="用户名">
                <el-input v-model="rule.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="rule.upass" type="password"></el-input>
            </el-form-item>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="loginfor">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
   </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                labelPosition: 'left',
                rule: {
                    uname: '',
                    upass: ''
                },
                message:""
            };
        },
        methods:{
            loginfor(){
                var params="uname="+this.rule.uname+"&upass="+this.rule.upass;
//                console.log(params);
                fetch("/api/login/check?"+params).then(function (e) {
              return e.json();
                }).then( (e)=> {
//                    console.log(e)
                    if(e.message=="yes"){
                        sessionStorage.login="yes";
                        sessionStorage.id=e.id;
                        sessionStorage.uname=e.uname;
                        this.$router.push("/")
                    }else{
                        this.rule.uname="";
                        this.rule.upass="";
                        this.message="登陆失败"
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #box{
        width: 100%;
        height:100vh;
        background:url("../assets/img/bg-img.png") center no-repeat;
        background-size:cover;
    }
    .loginList{
        width: 50vw;
        height:38vh;
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        border:1px solid gray;

    }
    .title{
        font-weight: 400;
        font-size: 22px;
        text-align: center;
        padding:20px 0;
    }
</style>
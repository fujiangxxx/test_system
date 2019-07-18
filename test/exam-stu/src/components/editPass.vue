<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
            <h1 class="mui-title">修改密码</h1>
        </header>
        <div class="mui-content">

            {{message}}
            输入旧密码:  <input type="text" v-model="pass1"><br>
            输入新密码:  <input type="text" v-model="pass2"><br>
            再次输入密码: <input type="text" v-model="pass3"><br>
            <input type="button" value="提交" @click="submit">

        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-pass",
        methods:{
            back(e){
                this.$router.go(-1);
            },
            submit(){
                if(this.pass1==""){
                    this.message="旧密码不能为空";
                    return;
                }
                if(this.pass2==""){
                    this.message="新密码不能为空";
                    return;
                }
                if(this.pass3==""){
                    this.message="再次输入密码";
                    return;
                }
                if(this.pass2!==this.pass3){
                    this.message="两次密码不一致";
                    return;
                }

                var params="pass1="+this.pass1+"&pass2="+this.pass2+"&id="+this.id;
                fetch("/api/stuLogin/editpass?"+params).then(function (e) {
                    return e.text();
                }).then((e)=>{
                    console.log(e);
                    if(e=="ok"){
                        this.message="成功";
                        sessionStorage.removeItem("stuLogin");
                        this.$router.push("/login")
                    }else{
                        this.message="失败";
                        this.pass1="";
                        this.pass2="";
                        this.pass3="";
                    }
                })
            }
        },
        data(){
            return {
                id:(JSON.parse(sessionStorage.getItem("stuLogin"))).id,
                pass1:"",
                pass2:"",
                pass3:"",
                message:""
            }
        }
    }
</script>

<style scoped>

</style>
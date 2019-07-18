<template>
    <el-container>
        <div class="userInfo">
            <el-button type="danger" @click="logout">退出</el-button>
        </div>
        <el-header height="15vh">欢迎来到{{uname}}登陆考试管理系统</el-header>
        <el-container class="body">
            <el-aside width="200px" style="background: #fff">
                <Menu></Menu>
            </el-aside>
            <el-main style="text-align: left">
               <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Menu from "@/components/Menu"
    export default {
        components:{Menu},
        data(){
            return {
                uname:sessionStorage.uname
            }
        },
        methods:{
            logout(){
                sessionStorage.removeItem("login");
                sessionStorage.removeItem("uname");
                sessionStorage.removeItem("id");
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height:15vh;

    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 80vh;
        height:80vh;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {

    }

    .el-container:nth-child(7) .el-aside {
    }
    .userInfo{
        width: 20vw;
        height:10vh;
        position: absolute;
        right:5vw;
        top:4vh;
    }

</style>
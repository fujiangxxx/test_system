<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
            <h1 class="mui-title">设置</h1>
        </header>
        <div class="mui-content">

            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <router-link class="mui-navigate-right" to="/editPass">修改密码</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'selfSet',
        data(){
           return {

           }
        },
        methods:{
            back(e){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
    body{
        color:black;
    }
    .box{
        width: 10rem;
        height:10rem;
       background: black;
    }
    .mui-content > .mui-table-view:first-child {
        margin-top: 0px;
    }
</style>
<template>
    <div>
        <!--个人信息-->
        <header class="user-set">
            <div class="user-name">
                <span>{{name}}</span>
            </div>
             <router-link  class="sets" to="/selfSet">
                <i class="icon iconfont icon-shezhi"></i>
             </router-link>
        </header>
        <!--个人信息-->
        <div class="user-info">
            <div class="user-infoCon">
            <div class="user-photo">
                <img :src="imgUrl" alt="">
            </div>
            <div class="userSelf">
                <div class="userNames">
                    <span>{{name}}</span>
                </div>
                <div class="userSex">
                    <i class="icon iconfont icon-nan" v-show="sex=='男'"></i>
                    <i class="icon iconfont icon-xingbienv" v-show="sex=='女'"></i>
                    <i class="icon iconfont icon-wenhao1 " v-show="sex=='保密'"></i>
                </div>
            </div>
            <router-link to="/userSet" class="toUpdate" tag="li">
                <i class="icon iconfont icon-iconfontjiantou4"></i>
            </router-link>
            </div>
        </div>
        <!--&lt;!&ndash;具体操作&ndash;&gt;-->
        <!--<div class="user-operate">-->
            <!--<section class="wrong-browse">-->
                <!--<div class="opertateIcon">-->
                    <!--<i class="icon iconfont icon-cuoti"></i>-->
                <!--</div>-->
                <!--<div class="opertateWord">-->
                    <!--<span>错题浏览</span>-->
                <!--</div>-->
                <!--<div class="opertate-point">-->
                    <!--<i class="icon iconfont icon-iconfontjiantou4"></i>-->
                <!--</div>-->
            <!--</section>-->
            <!--<section class="wrong-practice">-->
                <!--<div class="opertateIcon">-->
                    <!--<i class="icon iconfont icon-cuotiben"></i>-->
                <!--</div>-->
                <!--<div class="opertateWord">-->
                    <!--<span>错题练习</span>-->
                <!--</div>-->
                <!--<div class="opertate-point">-->
                    <!--<i class="icon iconfont icon-iconfontjiantou4"></i>-->
                <!--</div>-->
            <!--</section>-->
        <!--</div>-->
        <!--底部导航-->
        <footers></footers>
    </div>
</template>
<script>
    import footers from '@/components/footers-nav.vue'
    export default {

        name: 'SelfCenter',
        data(){
            return {
                name:JSON.parse(sessionStorage.getItem("teachLogin")).name,
                imgUrl:  JSON.parse(sessionStorage.getItem("teachLogin")).headPhoto==""  ?  ""  :  this.$imgUrls+JSON.parse(sessionStorage.getItem("teachLogin")).headPhoto,
                sex:JSON.parse(sessionStorage.getItem("teachLogin")).sex,
            }
        },
        methods:{
        },
        components:{
               footers
        }

    }
</script>
<style scoped>
    /**头部**/
    body{
        background: #ECECEC;
    }
    .user-set{
        width: 100%;
        height:0.6rem;
        position: fixed;
        top:0;
        left:0;
        background: #373737;
        overflow: hidden;
    }
    .user-name{

         width: 1rem;
        height: 0.6rem;
         padding: 0.1rem;
        float: left;
        text-align: center;
        line-height: 0.4rem;
        display: none;
    }
    .user-name span{
        display: block;
        width: 0.8rem;
        height: 0.4rem;
        font-size: 14px;
        font-weight:500;
        color: white;
    }
    .sets{
        float: right;
        font-size: 12px;
        color: white;
        width: 0.6rem;
        height: 0.6rem;
        padding: 0.1rem;
        list-style: none;

    }
    .sets i{
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        font-size: 14px;
        font-weight:500;
        color: white;
        text-align: center;
        line-height: 0.4rem;
    }
    /**用户信息**/
    .user-info{
        width: 100%;
        height: 2rem;
        background: #3D444E;
        overflow: hidden;
        margin-top: 0.6rem;
    }
    .user-infoCon{
        width: 100%;
        height: 1.4rem;
        margin-top: 0.3rem;
    }
    .user-photo{
        width: 0.8rem;
        height:0.8rem;
        float: left;
        background: rgba(248, 248, 248, 0.9);
        border-radius: 50%;
        margin-top: 0.3rem;
        margin-left: 0.3rem;
    }
    .user-photo  img{
        width: 100%;
        height:100%;
        border-radius: 50%;
    }
    .userSelf{
        width: 2rem;
        height:0.8rem;
        margin-top: 0.2rem;
        float: left;
        margin-left: 0.2rem;
        overflow: hidden;


    }
    .userNames{
        width:1rem;
        height: 100%;
        float: left;
        overflow: hidden;
        overflow:hidden;word-break:keep-all;white-space:nowrap;text-overflow:ellipsis;
    }
    .userNames span{
        font-size: 13px;
        color: #ffffff;
        text-align:center;
        line-height:0.8rem;
    }
    .userSex{
        width: 0.3rem;
        height:0.3rem;
        margin-top: 0.3rem;
        margin-left: 0.1rem;
        float: left;

    }
    .userSex i{
        display: block;
        font-size: 14px;
        color: cyan;
        text-align: center;
        line-height: 0.2rem;
    }
    .toUpdate{
        list-style: none;
        width: 0.5rem;
        height:0.5rem;
        margin-top: 0.5rem;
        float:right;
    }
    .toUpdate i{
        font-size: 15px;
        color: #fffdef;
    }
    /**基本操作**/
    .user-operate{
        width: 100%;
        height: auto;
        margin-top: 0.2rem;
    }
    .user-operate section{
        width: 100%;
        height:0.4rem;
        background:#FFFFFF;
        line-height: 0.4rem;
        margin-top:0.1rem;
    }
    .opertateIcon{
        float: left;
        margin-left: 0.2rem;
    }
    .opertateIcon i{
        font-size: 15px;
        color: #52514d;
    }
    .opertateWord{
        float: left;
        margin-left: 0.1rem;
    }
    .opertateWord span{
        font-size: 15px;
        color: #52514d;
    }
    .opertate-point{
        width: 0.3rem;
        height:0.4rem;
        float:right;
        margin-right: 0.2rem;
    }
    .opertate-point i{
        font-size: 15px;
        color: #52514d;
    }
</style>
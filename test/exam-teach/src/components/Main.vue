<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <router-link to="/userSet" tag="a" class="mui-action-back  mui-pull-left photo">
                <img :src="imgUrl" alt="">
            </router-link>
            <a class="mui-action-back  mui-pull-right logout" @click="logout"> 退出</a>
            <h1 class="mui-title">首页</h1>
        </header>
        <!--banner图-->
        <div class="swiper-p">
            <banner :listImg="listImg"></banner>
        </div>
        <div class="test-service">
            <div class="service-title test-tile">
                <div class="consul-line line"></div>
                <div class="service-title-word test-word">
                    基本操作
                </div>
            </div>
            <div class="mui-content">
                <ul class="opts">

                    <router-link to="/ti" tag="li" class="opt">
                        <span class="mui-icon mui-icon mui-icon-compose"></span>
                        <div class="info">我要组题</div>
                    </router-link>
                    <router-link to="/tied" tag="li" class="opt">
                        <span class="mui-icon mui-icon mui-icon-compose"></span>
                        <div class="info">已考试题</div>
                    </router-link>
                </ul>
            </div>
        </div>
        <!--底部导航-->
        <app-footers></app-footers>
    </div>

</template>

<script>
    import banner from '@/components/banner.vue'
    import footers from '@/components/footers-nav.vue'
    import a from '@/assets/img/1.jpg'
    import b from '@/assets/img/2.jpg'
    import c from '@/assets/img/111.jpeg'
    export default {
        components: {
            'banner':banner,
            'app-footers':footers
        },
            methods:{
                logout(){
//                    sessionStorage.removeItem("teachLogin");
                    this.$store.commit('goquit')
                    this.$router.push("/login")
                }
            },
            data(){
                return {
                    listImg: [
                        {
                            url: a
                        },
                        {
                            url: b
                        },
                        {
                            url: c
                        }],
                    imgUrl: JSON.parse(sessionStorage.getItem("teachLogin")).headPhoto==""  ?  ""  :  this.$imgUrls+JSON.parse(sessionStorage.getItem("teachLogin")).headPhoto

                }
            },
            mounted(){
            },
    }
</script>

<style scoped>
    ul,li{
        padding:0;;margin:0;list-style: none;
    }
    .opts{
        margin-top:0.4rem;
        width:100%;height:auto;
        display: flex;
        justify-content: space-around;
    }
    .opt{
        width:1rem;height:1rem;
    }
    .opt span{
        width:100%;
        text-align: center;
        font-size: .8rem;
        color: #67d4ff;

    }
    .opt div{
        text-align: center;
        font-size: .1rem;
    }

    .photo{
        display: block;
        width:36px;
        height:36px;
        background: rgba(200,200,200,0.3);
        border-radius: 50%;
        margin-top:4px;

    }
    .photo img{
        width: 100%;
        height:100%;
        border-radius: 50%;
    }
    .logout{
        font-size: 14px; line-height: 44px;
    }
    .swiper-p{
        width: 100%;
        height:2rem;
        margin-top:44px;
        overflow: hidden;
    }
    .bannerBox{
        width: 100%;
        height:2rem;
    }
    .test-service {
        width: 100%;
        padding-top: 0.2rem;
        overflow: hidden;
    }
    .service-title {
        margin-bottom: 0.1rem;
    }

    .test-tile {
        height: 0.4rem;
        padding-left: 0.1rem;
    }
    .line {
        width: 0;
        height: 0.2rem;
        float: left;
        border-right: 2px solid dodgerblue;
    }
    .test-word {
        font-size: 14px;
        color: #898989;
        margin-left: 0.2rem;
    }
    ul,li{
        padding:0;;margin:0;list-style: none;
    }
    .opts{
        margin-top:0.4rem;
        width:100%;height:auto;
        display: flex;
        justify-content: space-around;
    }
    .opt{
        width:1rem;height:1.2rem;
    }
    .opt span{
        width:100%;
        text-align: center;
        font-size: .8rem;
        color: #67d4ff;

    }
    .opt div{
        margin-top: 0.1rem;
        text-align: center;
        font-size: .2rem;
    }

    .photo{
        width:36px;
        height:36px;
        background: rgba(200,200,200,0.3);
        border-radius: 50%;
        margin-top:4px;

    }
    .logout{
        font-size: 14px; line-height: 44px;
    }
    /**底部导航**/
    .footers{
        width: 100%;
        height: 1rem;
        background: cyan;
        position: fixed;
        z-index: 10;
        left:0;
        bottom: 0;
    }

</style>
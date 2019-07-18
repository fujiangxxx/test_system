<template>
    <div>
        <footer class="footer_guide border-1px">
            <a href="javascript:;" class="guide_item" @click='goTo("/")'  :class="{'on':'/'==$route.path}">
                <span>
                    <i class="icon iconfont icon-shouye"></i>
                </span>
                <span>首页</span>
            </a>
            <a href="javascript:;" class="guide_item" @click='goTo("/selfCenter")' :class="{'on':'/selfCenter'==$route.path}" >
                <span>
                    <i class="icon iconfont icon-wode"></i>
                </span>
                <span>个人中心</span>
            </a>

        </footer>
    </div>
</template>
<script>
    /**文字  icon  路由传值**/
    export default{
        data(){
            return{

            }
        },

        methods:{
            goTo(path){
                this.$router.push(path);
            }
        }

    }
</script>
<style scoped>
    .footer_guide{
        border-top: 0.01rem lightgray solid;
        position :fixed;
        z-index:100;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        width :100%;
        height :1rem;
        display: flex;
    }
.guide_item{
    display :flex;
    flex: 1;
    text-align: center;
    flex-direction :column;
    align-items :center;
    margin :5px;
    color: #999;
}
    .on{
         color : #42c8ff;
     }

     span{
         font-size :12px;
         margin-top: 2px;
         margin-bottom: 2px;
     }

     .iconfont{
         font-size :22px;
     }

</style>
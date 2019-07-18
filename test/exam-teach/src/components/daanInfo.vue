<template>
    <div>
        <div>
            <header class="mui-bar mui-bar-nav">
                <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
                <h1 class="mui-title">答案</h1>
            </header>
            <div class="mui-content">

                <div class="answers">
                    <span>正确答案:</span>
                    <span class="answers-container">{{result}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "daan-info",
        methods:{
            back(){
                this.$router.go(-1);
            }
        },
        data(){
            return {
                result:""
            }
        },
        mounted(){
            fetch("/api/stukaoshi/daanInfo?id="+this.$route.params.id).then(function (e) {
                return e.text();
            }).then((e)=>{
                console.log(e)

                this.result=e.replace(/\"/g, "").replace(/\|/g," ");
            })
        }

    }
</script>
<style scoped>
    .answers{
        width: auto;
        height:auto;
        font-size: 18px;
        line-height: 0.8rem;
        color:gray;
        float: left;
    }
    .answers-container{
        color: #23bbff;
    }
</style>
<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
            <h1 class="mui-title">修改性别</h1>
        </header>
        <div class="updateSex">

            <el-radio-group v-model="sexed">
                <el-radio :label="2">保密</el-radio>
                <el-radio :label="1">男</el-radio>
                <el-radio :label="3">女</el-radio>
            </el-radio-group>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'editSex',
        data(){
            return {

            }
        },
        methods:{
            back(e) {
                this.$router.go(-1);
            }
        },
        computed:{
            sexed:{
                get(){
                    var updateUsexed=this.$store.state.updateUsexed==""?JSON.parse(sessionStorage.getItem('teachLogin')).sex:this.$store.state.updateUsexed;
//                    console.log(updateUsexed);
                    switch(updateUsexed){
                        case "男":
                            updateUsexed=1;
                            break;
                        case "女":
                            updateUsexed=3;
                            break;
                        case "保密":
                            updateUsexed=2;
                            break;
                    };
//                    console.log(updateUsexed);
                    return updateUsexed
                },
                set(v){
//                    console.log(v)
                    switch(v){
                        case 1:
                            v="男";
                            break;
                        case 3:
                            v="女";
                            break;
                        case 2:
                            v="保密";
                            break;
                    };
//                    console.log(v)
                    this.$store.commit("updateUsex",{updateUsexed:v})
                }
            }

        }
    }
</script>
<style scoped>
     .updateSex{
         margin-left: 0.3rem;
         margin-top: 1.1rem;
         display: flex;
         flex-direction:column;
     }
    .sureBut{
       width: 20%;
    }
</style>
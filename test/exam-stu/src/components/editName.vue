<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
            <h1 class="mui-title">修改姓名</h1>
        </header>
        <div class="updateName">
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
            <el-form-item label="学生姓名">
                <el-input v-model="form.updateUnameed"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'editName',
        data(){
            return {
                form: {
                    updateUnameed: this.$store.state.updateUnameed==""?JSON.parse(sessionStorage.getItem('stuLogin')).name:this.$store.state.updateUnameed,
                }
            }
        },
        methods:{
            back(e) {
                this.$router.go(-1);
            },
            onSubmit(){
                 this.$store.commit('updateUname',{updateUnameed:this.form.updateUnameed})
            },
            cancel(){
                this.form.updateUnameed=""
            }
        },
        computed:{
            updateUnameed(){
                return this.$store.state.updateUnameed==""?this.user.name:this.$store.state.updateUnameed
            }
        }

    }
</script>
<style scoped>
     .updateName{
         margin-top:1.2rem;
     }
</style>
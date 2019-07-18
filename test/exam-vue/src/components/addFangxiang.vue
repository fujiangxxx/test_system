<template>
    <div>

         {{message}}
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
            <el-form-item label="方向名称">
                <el-input v-model="form.fname"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">添加</el-button>
                    <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>


</template>

<script>
    export default {
        name: "add-fangxiang",
        data() {
            return {
                form: {
                    fname: '',
                },
                message:""
            }
        },
        methods: {
            onSubmit() {
                    if(this.form.fname==""){
                        this.message="请填写内容"
                    }else {
                        fetch("/api/fangxiang/addFangxiang?fname="+this.form.fname).then(function (e) {
                            return e.text()
                        }).then( (e)=> {
                            if(e==="ok"){
                                this.$message({
                                    message: '添加成功',
                                    type: 'success',
                                    duration:1000
                                });
                                this.form.fname=""
                            }else{
                                this.$message({
                                    message: '添加失败',
                                    type: 'error',
                                    duration:1000
                                });
                                this.form.fname=""
                            }
                        })
                    }
            },
            cancel(){
                this.form.fname=""
            }
        }
    }
</script>

<style scoped>

</style>
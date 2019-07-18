<template>
    <div>

        {{message}}
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
            <el-form-item label="题目类型">
                <el-input v-model="form.typename"></el-input>
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
                    typename: '',
                },
                message:""
            }
        },
        methods: {
            onSubmit() {
                if(this.form.typename==""){
                    this.message="请填写类型"
                }else {
                    fetch("/api/type/addType?typename="+this.form.typename).then(function (e) {
                        return e.text()
                    }).then( (e)=> {
                        if(e==="ok"){
                            this.$message({
                                message: '添加成功',
                                type: 'success',
                                duration:1000
                            });
                            this.form.typename=""
                        }else{
                            this.$message({
                                message: '添加失败',
                                type: 'error',
                                duration:1000
                            });
                            this.form.typename=""
                        }
                    })
                }
            },
            cancel(){
                this.form.typename=""
            }
        }
    }
</script>

<style scoped>

</style>
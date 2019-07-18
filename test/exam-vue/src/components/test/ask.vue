<template>
    <div>
        <el-form>
        题目录入：

        <el-input v-model="title" placeholder="请输入题目"></el-input>

        <el-form-item label="答案">
            <el-input type="textarea" v-model="daan"></el-input>
        </el-form-item>
        <el-button type="success" @click="submit">添加</el-button>
        </el-form>
    </div>
</template>

<script>

    export default {
        name: "option1",
        data(){
            return {
                title:"",
                daan:""
            }

        },
        methods:{
            submit(){

                var fid=this.$route.query.fid;
                var typeid=this.$route.query.typeid;

                var params="fid="+fid+"&typeid="+typeid+"&title="+this.title+"&daan="+this.daan+"&options="

                fetch("/api/test/add",{
                    method:"post",
                    headers:{
                        "content-type":"application/x-www-form-urlencoded"
                    },
                    body:params
                }).then(function (e) {
                    return e.text();
                }).then((e)=>{
                    if(e=="ok"){
                        this.$message({
                            message:"添加成功",
                            type: 'success'
                        })

                    }else{
                        this.$message({
                            message:"添加失败",
                            type: 'warning'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
            <el-form-item label="类型名称">
                <el-input v-model="form.tname"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="edit">修改</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
        <div class="message">{{message}}</div>
    </div>
</template>
<script>
    export default {
        name: "typeEdit",

        data(){
            return {
                form:{
                   tname:""
                },
                message:""
            }
        },
        methods:{
            edit(){
                console.log(this.form.tname)
                var params="tname="+this.form.tname+"&tid="+this.$route.params.tid;
                fetch('/api/type/edit/?'+params).then(function(e){
                    return e.text();
                }).then((e)=>{
                    if(e=="ok"){
                        this.message="编辑成功";
                        this.form.tname=""
                    }else if(e=="err"){
                        this.message="编辑失败";
                    }
                })
            },
            cancel(){
                this.form.tname=""
            }
        },
        mounted(){
            fetch('/api/type/editSelect?tid='+this.$route.params.tid).then(function(e){
                return e.json();
            }).then((e)=>{
                this.form.tname=e.typename;
            })
        }
    }

</script>
<style>
    .el-main[data-v-178c9da0]{
        line-height: 0;
    }
    .message{
        font-size: 18px;
    }
</style>
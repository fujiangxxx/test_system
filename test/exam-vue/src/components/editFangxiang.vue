<template>

         <div>

             {{message}}
             <el-form ref="form" :model="form" label-width="80px" :inline="true">
                 <el-form-item label="方向名称">
                     <el-input v-model="form.fname"></el-input>
                 </el-form-item>
                 <el-form-item>
                     <el-button type="primary" @click="editCon">修改</el-button>
                     <el-button >取消</el-button>
                 </el-form-item>
             </el-form>
         </div>

</template>

<script>
    export default {
        name: "edit-fangxiang",
        data(){
            return {
               form:{
                   fname:""
               },
                message:""
            }
        },
        mounted(){
            fetch("/api/fangxiang/editSelect/"+this.$route.params.fid).then(function (e) {
               return e.json();
            }).then((e)=>{
               this.form.fname=e.fname;
            })
        },
        methods:{
            editCon(){
                var params="fname="+this.form.fname+"&fid="+this.$route.params.fid;
                fetch("/api/fangxiang/editCon/?"+params).then(function (e) {
              return e.text();
                }).then((e)=> {
                    if(e=="ok"){
                        this.message="成功";
                    }else{
                        this.message="失败"
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
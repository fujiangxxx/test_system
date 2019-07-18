<template>

    <div class="box">
        {{message}}
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="教师姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="所带班级">
                <el-select v-model="form.cid" placeholder="请选择班级">
                    <el-option :label="item.name" :value="item.id" v-for="item in datas" :key="item.id"></el-option>
                </el-select>
            </el-form-item>


            <el-form-item label="所带方向">
                <el-select v-model="form.fid" placeholder="请选择方向">
                    <el-option :label="item.fname" :value="item.fid" v-for="item in fdatas" :key="item.fid">{{item.fname}}</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="教师性别">
                <el-radio-group v-model="form.sex">
                    <el-radio :label="2">保密</el-radio>
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="3">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="onSubmit">添加</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        name: "add-sign-stu",
        data(){
          return {
              form:{
                  name:"",
                  cid:"",
                  fid:"",
                  sex:2

              },
              datas:[],
              message:"",
              fdatas:[]
          }
        },
        mounted(){
            fetch("/api/classes/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                this.datas=e;
            })

            fetch("/api/fangxiang/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                this.fdatas=e;
            })
        },
        methods:{
            onSubmit(){
                console.log(this.form.sex)
                    var params="name="+this.form.name+"&cid="+this.form.cid+"&fid="+this.form.fid+"&sex="+this.form.sex;
                    fetch("/api/teach/signTe?"+params).then(function (e) {
                        return e.text();
                    }).then((e)=>{
                        if(e=="ok"){
                            this.message="添加成功"
                        }else{
                            this.message="添加失败"
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>
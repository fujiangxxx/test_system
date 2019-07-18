<template>
      <div class="box">
          {{message}}
          <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="班级名称">
                  <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="课程方向">
                  <el-select v-model="form.fid" placeholder="请选择方向">
                      <el-option :label="item.fname" :value="item.fid" v-for="item in datas" :key="item.id"></el-option>


                  </el-select>
              </el-form-item>

              <el-form-item>
                  <el-button type="success" @click="onSubmit">添加</el-button>
              </el-form-item>
          </el-form>
      </div>
</template>

<script>
    export default {
        name: "add-classes",
        data() {
            return {
                form: {
                    name: '',
                    fid: ''

                },
                message:"",
                datas:[]
            }
        },

        mounted(){
           fetch("/api/fangxiang/select").then(function (e) {
               return e.json();
           }).then((e)=>{
               this.datas=e;
           })
        },
        methods: {
            onSubmit() {
              var params="name="+this.form.name+"&fid="+this.form.fid;
              fetch("/api/classes/add?"+params).then(function (e) {
                return e.text();
              }).then((e)=>{
                  if(e=="ok"){
                        this.message="添加成功"
                  }
              })
            }
        }
    }
</script>

<style scoped>
.box{
    width:300px;
}
</style>
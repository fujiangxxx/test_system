<template>
    <div>
        <el-form>
        <el-form-item label="题目方向">
            <el-select v-model="form.fid" placeholder="请选择方向">
                <el-option :label="item.fname" :value="item.fid" v-for="item in fangxiangDatas" :key="item.id"></el-option>


            </el-select>
        </el-form-item>
            <el-form-item label="题目类型">
                <el-select v-model="form.typeid" placeholder="请选择类型" @change="change()">
                    <el-option :label="item.typename" :value="item.typeid" v-for="item in typeDatas" :key="item.typeid"></el-option>


                </el-select>
            </el-form-item>
        </el-form>
        <router-view> </router-view>
    </div>
</template>

<script>
    export default {
        name: "add-test",
        data(){
            return{
                  form:{
                      fid:"",
                      typeid:""

                  },
                fangxiangDatas:[],
                typeDatas:[],
            }
        },
        mounted(){
            fetch("/api/fangxiang/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                this.fangxiangDatas=e;
            })

            fetch("/api/type/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                this.typeDatas=e;
            })
        },
        methods:{
            change(){

                var params="fid="+this.form.fid+"&typeid="+this.form.typeid;
                if(this.form.typeid==1){
                    this.$router.push("/option?"+params)
                }else if(this.form.typeid==2){
                    this.$router.push("/options?"+params)
                }else if(this.form.typeid==3){
                    this.$router.push("/ask?"+params)
                }
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
         {{names}}题目录入：

        <el-input v-model="title" placeholder="请输入题目"></el-input>

        <el-button type="success" @click="addOption" style="margin:5px auto">点击添加选项</el-button>


        <el-input v-model="item.con" placeholder="请输入选项" v-for="(item,key) in options" :key="key" style="margin:5px 0;">
            <i slot="suffix" class="el-input__icon el-icon-close" @click="del(item.id)"></i>
        </el-input>

        <div style="margin:5px 0">
        答案录入:
        <el-input v-model="daan" placeholder="请输入答案"></el-input>
        </div>
        <el-button type="success" @click="submit">添加</el-button>

    </div>
</template>

<script>
    export default {
        name: "option1",
        data(){
            return {
                options:[],
                title:"",
                daan:"",
                names:"单选"
            }
        },
        methods:{
            addOption(){
                this.options.push({con:"",id:new Date().getTime()})
            },
            del(id){
                this.options=this.options.filter(function (item) {
                    if(item.id!=id){
                        return item
                    }
                })
            },
            submit(){

                var fid=this.$route.query.fid;
                var typeid=this.$route.query.typeid;

                var optionsArr=this.options.map(function (item) {
                    return item.con
                })

                var params="fid="+fid+"&typeid="+typeid+"&title="+this.title+"&daan="+this.daan+"&options="+optionsArr.join("|")

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
        },
        watch:{
            $route(){
                if(this.$route.query.typeid==1) {
                    this.names = "单选"
                }else{
                    this.names = "多选"
                }
            }
        }
    }
</script>

<style scoped>

</style>
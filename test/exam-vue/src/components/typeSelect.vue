<template>
    <div>
        <table class="table table-bordered">
            <tbody>
            <tr>
                <th>tid</th>
                <th>分类</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in typeData">
                <td>{{item.typeid}}</td>
                <td>{{item.typename}}</td>
                <td>
                    <button type="button" class="btn btn-danger" @click="del(item.typeid)">删除</button>
                    <router-link class="btn btn-success" :to="'/typeEdit/'+item.typeid">编辑</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name:"typeSelect",
        data(){
            return {
                typeData:""
            }
        },
        methods:{
            del(id){
                fetch('/api/type/del?typeid='+id).then(function(e){
                    return e.text();
                }).then((e)=>{

                    if(e=="ok"){
                        alert("删除成功");
                        this.typeData=this.typeData.filter(function(item){
                            if(id!=item.typeid){
                                return item;
                            }
                        })
                    }else if((e)=="err"){
                        alert("删除失败");
                    }
                })
            },
        },
        mounted(){
            fetch('/api/type/select').then(function(e){
                return e.json();
            }).then((e)=>{
                this.typeData=e;
            })
        }
    }
</script>
<style scoped>
    tr,th,td{
        text-align: center;
    }
</style>

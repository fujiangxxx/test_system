<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                prop="fid"
                label="id"
                >
        </el-table-column>
        <el-table-column
                prop="fname"
                label="方向名称"
               >
        </el-table-column>

        <el-table-column

                label="操作"
               >
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row.fid)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">
                    <router-link :to="'/editFangxiang/'+scope.row.fid"> 编辑 </router-link>
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "select-fangxiang",
        methods: {
            handleClick(id) {
                fetch("/api/fangxiang/del/"+id).then(function (e) {
                    return e.text();
                }).then( (e)=> {
                    if(e=="ok"){
                        this.tableData=this.tableData.filter(function (item) {
                            if(item.fid!=id){
                                return item
                            }
                        })
                    }
                })
            }
        },

        data() {
            return {
                tableData: [

                ]
            }
        },

        mounted(){
            fetch("/api/fangxiang/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                this.tableData=(e);
            })
        }
    }
</script>

<style scoped>

</style>
<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="id"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="班级名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="fname"
                label="方向名称">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "select-classes",
        data() {
            return {
                tableData: []
            }
        },

        mounted(){
            fetch("/api/classes/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                console.log(e);
                this.tableData=(e);
            })
        }
    }
</script>

<style scoped>

</style>
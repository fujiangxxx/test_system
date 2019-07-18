<template>

    <div>
        <router-link to="/addSignTe" tag="button" type="button" class="el-button el-button--primary el-icon-plus">单条添加</router-link>

        <router-link to="/addMoreTe" tag="button" type="button" class="el-button el-button--primary el-icon-more">批量添加</router-link>

        <el-input
                placeholder="请输入内容"
                v-model="like" style="display: inline-block;width:200px;">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>

        <el-button icon="el-icon-search" round @click="search"></el-button>



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
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="cname"
                label="班级">
        </el-table-column>

        <el-table-column
                prop="fname"
                label="方向">
        </el-table-column>
        <el-table-column
                prop="sex"
                label="性别">
        </el-table-column>
    </el-table>

        <el-button type="info" @click="up()">上一下</el-button>
        <el-button type="info" @click="next()">下一页</el-button>
    </div>
</template>

<script>



    export default {
        name: "select-teach",
        data() {
            return {
                tableData: [],
                page:0,
                pages:0,
                like:""
            }
        },
        methods:{
            search(){
                fetch("/api/teach/select?page=" + 0+"&like="+this.like).then(function (e) {
                    return e.json();
                }).then((e) => {
                    for(var i=0;i<e.length;i++){
                        switch(e[i].sex){
                            case 1:
                                e[i].sex="男" ;
                                break;
                            case 3:
                                e[i].sex="女" ;
                                break;
                            case 2:
                                e[i].sex="保密" ;
                                break;
                        }
                    }
                    this.tableData = e;
                })

                fetch("/api/teach/selectAll?like="+this.like).then(function (e) {
                    return e.text();
                }).then((e)=>{
                    this.pages=e;
                })

            },
            up(){

                if(this.page>0) {
                    this.page-=1
                    fetch("/api/teach/select?page=" + this.page+"&like="+this.like).then(function (e) {
                        return e.json();
                    }).then((e) => {
                        for(var i=0;i<e.length;i++){
                            switch(e[i].sex){
                                case 1:
                                    e[i].sex="男" ;
                                    break;
                                case 3:
                                    e[i].sex="女" ;
                                    break;
                                case 2:
                                    e[i].sex="保密" ;
                                    break;
                            }
                        }
                        this.tableData = e;
                    })
                }
            },
            next(){

//                console.log(this.pages);
                if(this.page<this.pages-1) {
                    this.page+=1;
                    fetch("/api/teach/select?page=" + this.page+"&like="+this.like).then(function (e) {
                        return e.json();
                    }).then((e) => {
                        for(var i=0;i<e.length;i++){
                            switch(e[i].sex){
                                case 1:
                                    e[i].sex="男" ;
                                    break;
                                case 3:
                                    e[i].sex="女" ;
                                    break;
                                case 2:
                                    e[i].sex="保密" ;
                                    break;
                            }
                        }
                        this.tableData = e;
                    })
                }

            }

        },
        mounted(){
            fetch("/api/teach/selectAll").then(function (e) {
                return e.text();
            }).then((e)=>{
                this.pages=e;
            })

            fetch("/api/teach/select?page="+this.page).then(function (e) {
                return e.json();
            }).then((e)=>{
                for(var i=0;i<e.length;i++){
                    switch(e[i].sex){
                        case 1:
                            e[i].sex="男" ;
                            break;
                        case 3:
                            e[i].sex="女" ;
                            break;
                        case 2:
                            e[i].sex="保密" ;
                            break;
                    }
                }
                this.tableData=e;
            })
        }
    }
</script>

<style scoped>

</style>
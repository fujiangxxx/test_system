<template>
    <div>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-icon  mui-icon-closeempty mui-pull-left" @click.prevent="back($event)"></a>
        <h1 class="mui-title">选择班级</h1>
    </header>
    <div class="mui-content">

        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="item in datas" @click="select(item)" :style="{color:item.color}">{{item.name}}</li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        name: "select-banji",
        methods:{
            back(e){
                this.$router.go(-1);
            },
            select(item){
                this.datas.forEach(function (item,index) {
                    item.color="#000";
                })
                item.color="blue";
                this.$store.commit("setCname",{cname:item.name,cid:item.id})
            }
        },
        data(){
            return {
                datas:[],
                color:"red"
            }
        },
        mounted(){
            fetch("/api/classes/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                console.log(e)
                e.forEach(function (item,index) {
                    item.color="#000";
                })
                this.datas=e;
            })
        }
    }
</script>

<style scoped>

</style>
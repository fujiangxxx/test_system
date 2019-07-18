<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
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
        name: "select-classes",
        methods:{
            back(e){
                this.$router.go(-1);
            },
            select(item){
                this.datas.forEach(function (item,index) {
                    item.color="#000";
                })
                item.color="blue";
                this.$store.commit("updateUclass",{uclass:item.name,ucid:item.id})
            }
        },
        data(){
            return {
                datas:[],
                color:"red",
                teacherClass:this.$store.state.updateUclassed==""?JSON.parse(sessionStorage.getItem('teachLogin')).teachClass:this.$store.state.updateUclassed,
            }
        },
        mounted(){
            var that=this;
            fetch("/api/classes/select").then(function (e) {
                return e.json();
            }).then((e)=>{
                e.forEach(function (item,index) {
                    item.color="#000";
                    if(item.name==that.teacherClass){
                        item.color="blue"
                    }
                })
                this.datas=e;
            })
        }
    }
</script>

<style scoped>

</style>
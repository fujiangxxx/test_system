<template>
     <div>
         <header class="mui-bar mui-bar-nav">
             <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
             <h1 class="mui-title">已考题</h1>
         </header>

         <div class="mui-content">
             <ul class="mui-table-view">
                 <li class="mui-table-view-cell" v-for="item in datas">
                     <router-link class="mui-navigate-right" :to="'/tiedStu?zid='+item.zid">
                         {{item.tname}}
                     </router-link>
                 </li>
             </ul>
         </div>

     </div>
</template>

<script>
    export default {
        name: "tied",
        data(){
            return {
                datas:[]
            }
        },
        methods:{
            back(e){
                this.$router.go(-1);
            }
    },
        mounted(){
            fetch("/api/teachtest/tied?teachid="+JSON.parse(sessionStorage.teachLogin).id).then(function (e) {
                return e.json();
            }).then((e)=>{
                console.log(e);
                this.datas=e;
            })
        }
    }
</script>

<style scoped>
</style>
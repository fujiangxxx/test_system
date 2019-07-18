<template>
      <div class="wel">
          欢迎来到 {{uname}} 来到 主页
      </div>
</template>

<script>
    export default {
        name: "welcome",
        data(){
           return {
               uname:sessionStorage.uname
           }
        },
    }
</script>

<style scoped>
    .wel{
        width: 45vw;
        height:15vh;

        position: absolute;
        left:55vw;
        top:40vh;
        text-align: center;
        line-height: 15vh;
        border:1px solid #838dff;
    }
</style>
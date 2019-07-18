<template>
  <div id="app">
      <transition name="fade" mode="out-in">
          <router-view/>
      </transition>
  </div>
</template>

<script>
    import footers from '@/components/footers-nav.vue'
export default {
  name: 'App',
    data(){
      return {

      }
    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .fade-enter-active,.fade-leave-active{
      transition:opacity .4s;
  }
  .fade-enter,.fade-leave-to{
      opacity:0;
  }
</style>

<template>
  <div id="app"> 
     <router-view></router-view>
      <main-tabbar/>
  </div>
</template>
<script>
 import MainTabbar from './components/content/MainTabbar.vue'
export default {
  name:'app',
  components:{
    MainTabbar
  }
}
</script>
<style>
  /* style中引入样式方式 */
  @import "./assets/css/base.css";
  
</style>

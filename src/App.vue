<template>
  <div id="app">
    <router-view/>
    <van-tabbar  v-model="active"  @change="onChange">
      <van-tabbar-item icon="home-o" dot>
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
export default {
  data(){
    return{
      userId:sessionStorage.getItem('userId'),
      active:0
    }
  },
  methods:{
    onChange(index){
      if(index==0){
        this.$router.push({path:`/storeIndex?userId=${this.userId}`})
      }else{
        this.$router.push({path:`/storeMine?userId=${this.userId}`})
      }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(247,248,255);
}

</style>

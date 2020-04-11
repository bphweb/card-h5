<template>
  <div class="home">
    <van-tabs @click="onClick" animated>
      <van-tab title="热门">
        <van-grid :border="false" :column-num="2" :gutter="10">
          <van-grid-item v-for="item in list" :key="item.id">
            <van-image :src="url + item.imgUrl" />
            <div style="width:100%">
              <div style='font-size:16px;font-weight:600;margin-top:10px'>{{item.productName}}</div>
              <div style="font-size:14px;color:#bbb">{{item.comment2 | wordMore(item.comment2)}}</div>
              <div style="text-align:center;margin-top:10px">
                <van-button type="danger" plain round size="small" @click="applyNow(item.link)">立即申请</van-button>
              </div>
            </div>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="号卡产品">
        <van-grid :border="false" :column-num="2" :gutter="10">
          <van-grid-item v-for="item in list" :key="item.id">
            <van-image :src="url + item.imgUrl" />
            <div style="width:100%">
              <div style='font-size:16px;font-weight:600;margin-top:10px'>{{item.productName}}</div>
              <div style="font-size:14px;color:#bbb">{{item.comment2 | wordMore(item.comment2)}}</div>
              <div style="text-align:center;margin-top:10px">
                <van-button type="danger" plain round size="small" @click="applyNow(item.link)">立即申请</van-button>
              </div>
            </div>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from 'vue'
import {Tab, Tabs, Grid, GridItem, Image, Button} from 'vant'
Vue.use(Tab).use(Tabs).use(Grid).use(GridItem).use(Image).use(Button)
export default {
  name: 'Home',
  data () {
    return {
      list:[],
      url: 'http://47.99.37.96:88',
    }
  },
  filters:{
    wordMore(str){
      let len = str.length
      if(len>10){
        str = str.substring(0,10)+"......"
        return str
      }
    }
  },
  methods:{
    onClick(name, title){
      console.log(title)
    },
    getData(){
      let params ={}
      let userId= window.location.href.split('?')[1].split('=')[1]
      this.$axios({
        method:'get',
        url:'/api/product/getStoreProductList?userId='+userId,
      }).then(res => {
        console.log(res)
        this.list =res.data.list
        console.log(this.list)
      })
    },
    applyNow(data){
      window.location.href = data
    }
  },
  created(){
    this.getData()
  }
}
</script>
<style scoped>
  .home {
    height:100vh
  }
</style>

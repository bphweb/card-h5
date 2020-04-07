<template>
  <div class="home">
    <van-tabs @click="onClick" animated>
      <van-tab title="热门">
        <van-grid :border="false" :column-num="2" :gutter="10">
          <van-grid-item v-for="item in 3" :key="item">
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            <div style="width:100%">
              <div style='font-size:16px;font-weight:600;margin-top:10px'>大王卡</div>
              <div style="font-size:14px;color:#bbb">{{str | wordMore(str)}}</div>
              <div style="text-align:center;margin-top:10px">
                <van-button type="danger" plain round size="small">立即申请</van-button>
              </div>
            </div>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="号卡产品">
        <van-grid :border="false" :column-num="2" :gutter="10">
          <van-grid-item v-for="item in 3" :key="item">
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            <div style="width:100%">
              <div style='font-size:16px;font-weight:600;margin-top:10px'>大王卡</div>
              <div style="font-size:14px;color:#bbb">{{str | wordMore(str)}}</div>
              <div style="text-align:center;margin-top:10px">
                <van-button type="danger" plain round size="small">立即申请</van-button>
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
      str:'19元/月 40G通用444444444444444444'
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
    }
  }
}
</script>
<style scoped>
  .home {
    height:100vh
  }
</style>

<template>
  <div class="about">
    <div class="container">
      <van-row>
        <van-col><h3>登录注册</h3></van-col>
      </van-row>
      <van-cell-group>
        <van-field
          v-model="form.phone"
          required
          label="手机号"
          placeholder="请输入手机号"
        />
        <van-field
          v-model="form.checkMsg"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <van-button type="primary" size="normal" block>确定</van-button>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Row,Col,CellGroup,Field} from 'vant'
  Vue.use(CellGroup).use(Field).use(Row).use(Col)
  export default {
    data(){
      return {
        form:{}
      }
    }
  }
</script>
<style scoped>
  .about {
    background: #fff;
    padding:30% 10px 10px 10px
  }
</style>

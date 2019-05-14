<template>
  <div class="payAfter">
    <cHeader>
      <span slot="content">统一收银台微信中间页</span>
    </cHeader>
    <div class="main">
      <div class="con">
        <span style="color:#01CE05" class="iconfont iconweixinzhifu2"></span>
      </div>
      <p>1、如果未打开微信客户端或未完成付款，请点击'继续支付'；</p>
      <p>2、如果你已完成，请点击'已完成付款'；</p>
    </div>
    <div class="btns">
      <div class="btn pay_btn" @click="proceed">继续付款</div>
      <div class="btn finish_btn" @click="finish">已完成付款</div>
    </div>
  </div>
</template>

<script>
import cHeader from "../components/cHeader/cHeader";
export default {
  data() {
    return {};
  },

  components: {
    cHeader
  },
  methods: {
    proceed(){
      console.log('继续付款')
    },
    finish(){
      console.log('已完成付款')
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/style/mixin.scss";
.payAfter {
  font-size: $p6;
  .main {
    padding: 50px 15px;
    .con {
      text-align: center;
      padding-bottom: 20px;
      .iconfont {
        font-size: $p40;
      }
    }
    p {
      color: #999;
      padding: 8px 0px;
    }
  }
  .btns {
    padding: 0px 15px;
    .btn {
      margin-top: 8px;
      width: 100%;
      border-radius: 4px;
      // background: #fe763b;
      @include sc($p16, #fff);
      text-align: center;
      height: 1.62rem;
      line-height: 1.62rem;
    }
    .pay_btn {
      background: #01CE05;
    }
    .finish_btn {
      color: #01CE05;
      border: 1px solid #01CE05;
    }
  }
}
</style>
<template>
  <!-- 支付表单信息 -->
  <div class="rechargeInfo">
    <cHeader>
      <span slot="content">支付信息页面</span>
    </cHeader>
    <main class="content">
      <div class="main">
        <div class="con">
          <span style="color:#06B666" class="iconfont iconchongzhichenggong"></span>
        </div>
        <p class="recharge">充值成功</p>
      </div>
      <div class="line"></div>
      <div class="info">
        <div class="info_top">
          <div class="order">订单编号</div>
          <div class="num">20190506098710508025102250128144</div>
        </div>
        <div class="info_bottom">
          <div class="amount">
            <div class="amount_left">充值金额</div>
            <div class="amount_right">10.00元</div>
          </div>
          <div class="amount">
            <div class="amount_left">卡内余额</div>
            <div class="amount_right">103.50元</div>
          </div>
        </div>
      </div>
      <div class="pay_btn" @click="finish">完成</div>
    </main>
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
    finish() {
      console.log("finish");
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/style/mixin.scss";
.rechargeInfo {
  height: 100%;
  background: #f5f9fc;
  font-size: $p6;
  .content {
    border-bottom: 1px solid #eee;
    .main {
      padding: 30px 15px;
      background: #fff;
      .con {
        text-align: center;
        padding-bottom: 20px;
        .iconfont {
          font-size: $p40;
        }
      }
      .recharge {
        text-align: center;
      }
    }
    .line {
      width: 100%;
      height: 10px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      background: #f5f9fc;
    }
    .info {
      padding: 0px 15px;
      background: #fff;
      .info_top {
        padding: 12px 0px;
        display: flex;
        border-bottom: 1px solid #eee;
        justify-content: space-between;
      }
      .info_bottom {
        .amount {
          padding: 20px 0px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .pay_btn {
      width: 94%;
      border-radius: 100px;
      border: 1px solid #eee;
      background: #fff;
      text-align: center;
      height: 1.62rem;
      line-height: 1.62rem;
      position: fixed;
      bottom: $p15;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
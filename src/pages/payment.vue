<!-- 支付页面 -->
<template>
  <div class="payment">
    <cHeader>
      <span slot="content">选择支付方式</span>
    </cHeader>
    <div class="desc">
      <div class="desc_money">交易金额 (元)</div>
      <div class="desc_info">
        <p>
          <span>{{ price | fixed }}</span>.00
        </p>
      </div>
      <div class="desc_f">
        <p>交易单号 : 20190506098710508025102250128144</p>
      </div>
    </div>
    <!-- payment_main -->
    <div class="payment_main">
      <div class="pay_mode">选择支付方式</div>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell
            style="color:#01CE05"
            class="iconfont iconweixinzhifu2"
            title="微信支付"
            @click="radio = '0'"
          >
            <van-radio name="0"/>
          </van-cell>
          <van-cell
            style="color:#06B4FD"
            class="iconfont iconzhifubaozhifu"
            title="支付宝支付"
            @click="radio = '1'"
          >
            <van-radio name="1"/>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <div class="pay_btn" @click="realPay(price)">下一步</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
// 引入 vant
import { Cell, CellGroup } from "vant";
import { RadioGroup, Radio } from "vant";
Vue.use(Cell).use(CellGroup);
Vue.use(RadioGroup);
Vue.use(Radio);
import cHeader from "../components/cHeader/cHeader";
export default {
  data() {
    return {
      radio: "0",
      allowClickStu: true, // 允许点击
      testUrl: ""
    };
  },
  components: {
    cHeader
  },
  methods: {
    realPay(price) {
      // 多次点击处理
      if (this.allowClickStu) {
        if (this.radio === "0") {
          // 微信支付
          this.wxjsPay();
        }
        if (this.radio === "1") {
          // 支付宝支付
          this.goaliPay();
        }
      }
      this.allowClickStu = false;
    },
    // 微信支付
    wxjsPay() {
      // http://wap.gzwmdy.cn/api/user/Pay/toWxpay
      // console.log('微信支付')
      // window.location.href = "http://wap.gzwmdy.cn/api/user/Pay/toWxpay";
      axios.get("http://wap.gzwmdy.cn/api/user/Pay/toWxpay").then(res => {
        console.log(res.data.data);
        if (res.data.code === 1) {
          window.location.href = res.data.data
        }
      });
      this.allowClickStu = true;
    },
    // 支付宝支付
    goaliPay() {
      // http://wap.gzwmdy.cn/api/user/Pay/toalipay
      // console.log('支付宝支付')
      window.location.href = "http://wap.gzwmdy.cn/api/user/Pay/toalipay";
      this.allowClickStu = true;
    }
  },
  computed: {
    price() {
      return this.$store.state.price;
    }
  },
  // 去除小数点后的数字
  filters: {
    fixed(value) {
      typeof value == 'undefined' ? value = null : value
      return Number(value).toFixed();
    }
  },
  created () {
    axios.get("http://wap.gzwmdy.cn/api/user/Pay/toWxpay").then(res => {
      console.log(res.data);
    });
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/style/mixin.scss";
.payment {
  font-size: $p6;
}
// desc
.desc {
  padding: 30px 20px 20px;
  background: #5bbea1;
  border-radius: 8px;
  .desc_money {
    color: #fff;
  }
  .desc_info {
    padding: 4px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: #fff;
    p {
      color: #fff;
      font-size: $p20;
    }
    span {
      color: #fff;
      font-size: $p35;
    }
  }
  .desc_f {
    p {
      padding-top: 4px;
      color: #fff;
      font-size: $p2;
    }
  }
}
// payment_main
.payment_main {
  padding: 10px 15px;
  margin-top: 4px;
  border: 1px solid #eee;
  border-radius: 8px;
  .iconfont {
    font-size: 14px;
  }
  .pay_mode {
    font-size: $p25;
    padding: 10px 0px;
  }
  .van-cell {
    padding-left: 0;
    padding-right: 0;
  }
  .iconweixinzhifu2:before {
    content: "\E62B";
    margin-right: 12px;
    font-size: 32px;
  }
  .iconzhifubaozhifu:before {
    content: "\e634";
    margin-right: 12px;
    font-size: 32px;
  }
  .pay_btn {
    margin-top: 8px;
    width: 100%;
    border-radius: 100px;
    background: #fe763b;
    @include sc($p16, #fff);
    text-align: center;
    height: 1.92rem;
    line-height: 1.92rem;
  }
}
</style>
<template>
  <div class="toggle">
    <div class="head">
      <div class="head-inner">
        <i class="back-btn iconfont iconjiantou-copy-copy" @click="$router.go(-1)"></i>
        <h2>首页界面切换</h2>
      </div>
    </div>
    <div class="mode">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="九宫格展示" clickable @click="radio = '0'">
            <van-radio checked-color="#1BBC9A" name="0"/>
          </van-cell>
          <van-cell title="横版展示" clickable @click="radio = '1'">
            <van-radio checked-color="#1BBC9A" name="1"/>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="btn">
      确认
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { RadioGroup, Radio } from "vant";
Vue.use(Cell).use(CellGroup);
Vue.use(RadioGroup);
Vue.use(Radio);
export default {
  data() {
    return {
      radio: "0"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";
.toggle {
  .head {
    width: 100%;
    height: 47px;
    text-align: center;
    background: #1bbc9a;
    font-size: 18px;
    line-height: 47px;
    .head-inner {
      padding: 0 0.1rem;
      display: flex;
      justify-content: space-around;
      i {
        color: #fff;
        font-size: 1rem;
      }
      h2 {
        flex: 1;
        color: #fff;
        font-size: 0.7rem;
        text-align: center;
      }
    }
  }
  .mode {
    .van-cell:not(:last-child)::after {
      content: ' ';
      left: 0;
    }
  }
  .btn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #1BBC9A;
    @include sc($p16, #fff);
    text-align: center;
    height: 1.92rem;
    line-height: 1.92rem;
  }
}
</style>


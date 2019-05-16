<template>
  <main id="paypwd" v-cloak v-if="shop">
    <article class="main-content">
      <dl>
        <dt>
          <img :src="shops.more.thumbnail" style="width: 100%; height: 100%; max-height: 123px;" >
        </dt>
        <dd>
          <p class="p_name">{{ shops.post_title }}</p>
          <p class="p_price">¥<span>{{ shops.post_keywords }}</span></p>
        </dd>
      </dl>
      <div class="btn-wrapper" @click="payment">
        <a class="btn-complete">立即支付</a>
      </div>
      <dl v-for="(img, i) in shops.more.photos" :key="i">
        <dt>
          <img :src="img.url" width="96%" height="96%" alt="">
        </dt>
        <dd>
          <p class="p_name"></p>
          <p class="p_price"></p>
        </dd>
      </dl>
      <!-- <dl>
        <dt>
          <img
            src="http://zgcxdz.com:10080/fs/img/sales_advertising/4w4iWKNUl0dkBMtIwc6vR9CYcR3tFzUf.jpg"
          >
        </dt>
        <dd>
          <p class="p_name"></p>
          <p class="p_price"></p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src="http://zgcxdz.com:10080/fs/img/sales_advertising/dNzufw1X7ue834MoA4Bb2advoUXEu5hC.jpg"
          >
        </dt>
        <dd>
          <p class="p_name"></p>
          <p class="p_price"></p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src="http://zgcxdz.com:10080/fs/img/sales_advertising/gSMjXhssr7ESlAn9W4G7viS1Dy5EL1zu.jpg"
          >
        </dt>
        <dd>
          <p class="p_name"></p>
          <p class="p_price"></p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src="http://zgcxdz.com:10080/fs/img/sales_advertising/AoeDQOTpz2Lt9BXLby8YFpbm0xXQKoxP.jpg"
          >
        </dt>
        <dd>
          <p class="p_name"></p>
          <p class="p_price"></p>
        </dd>
      </dl> -->
    </article>
  </main>
</template>

<script>
import { getShopLists, getShopInfo } from "../service/getData";
import { mapState } from "vuex";
export default {
  data() {
    return {
      imgs: [],
      shops: [],
      shop: ""
    };
  },
  methods: {
    // 获取商品列表
    getShops() {
      let id = this.$route.params.id;
      getShopInfo({ category_id: 1 })
        .then(res => {
          if (res.code === 1) {
            let data = res.data.list;
            // 循环遍历出对应子id的商品信息
            data.forEach(item => {
              if (item.id == id) {
                this.shops = item;
                this.imgs = item.more.photos;
                this.shop = item.more.thumbnail;
                this.isShow = false;
              }
            });
          }
        })
        .catch(err => console.log(err));
    },
    // 支付 环境判断
    IsWeixinOrAlipay(){
      var explorer = window.navigator.userAgent;
      //判断是不是微信      
      if (explorer.indexOf('MicroMessenger') >= 0) {
        // http://wap.gzwmdy.cn/api/user/Pay/toWxpay
        // alert("WeiXIN");
      } else {
        // http://wap.gzwmdy.cn/api/user/Pay/toalipay
        // alert("Alipay");
      }
    },
    // 立即支付事件
    payment() {
      this.IsWeixinOrAlipay();
    }
  },
  created() {
    this.getShops();
  },
  computed: mapState(["price"])
};
</script>

<style lang="scss" scoped>
@import "../assets/style/mixin.scss";

[v-cloak] {
  display: none;
}

#paypwd .main-content {
  margin: 0 0.4rem;
  dl {
    width: 100%;
    position: relative;
    margin-top: 20px;
    dd {
      width: 40%;
      margin-top: 11px;
      text-align: right;
      font-size: 16px;
      color: #221815;
      position: absolute;
      right: 6%;
      top: 0;
    }
  }
}
#paypwd .btn-wrapper .btn-complete {
  display: block;
  width: 100%;
  background: #20b375;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
}
</style>

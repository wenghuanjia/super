<template>
  <main class="main-content">
    <van-loading type="spinner" v-if="isShow" />
    <div v-else>
      <div class="detail_header">
        <div class="go_back" @click="$router.go(-1)">
          <img src="../assets/images/get_back.png" alt>
        </div>
        <!-- <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553505260675&di=204cc6c6108ed68a352b42b95f8036af&imgtype=0&src=http%3A%2F%2Fimg4.99114.com%2Fgroup1%2FM00%2F0C%2F83%2FwKgGS1lkeTqAItK9AAUVm11-hPY135.jpg"
          alt
        > -->
        <img :src="shop" alt="">
      </div>
      <div class="name_price">
        <div class="name">{{ shops.post_title }}</div>
        <div class="price">￥{{ price }}</div>
      </div>
      <div class="small_title">产品详情</div>
      <ul class="detail_list">
        <!-- <li class="detail_list_li">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553505260675&di=204cc6c6108ed68a352b42b95f8036af&imgtype=0&src=http%3A%2F%2Fimg4.99114.com%2Fgroup1%2FM00%2F0C%2F83%2FwKgGS1lkeTqAItK9AAUVm11-hPY135.jpg"
            alt
          >
        </li>
        <li class="detail_list_li">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553505260675&di=204cc6c6108ed68a352b42b95f8036af&imgtype=0&src=http%3A%2F%2Fimg4.99114.com%2Fgroup1%2FM00%2F0C%2F83%2FwKgGS1lkeTqAItK9AAUVm11-hPY135.jpg"
            alt
          >
        </li>
        <li class="detail_list_li">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553505260675&di=204cc6c6108ed68a352b42b95f8036af&imgtype=0&src=http%3A%2F%2Fimg4.99114.com%2Fgroup1%2FM00%2F0C%2F83%2FwKgGS1lkeTqAItK9AAUVm11-hPY135.jpg"
            alt
          >
        </li>
        <li class="detail_list_li">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553505260675&di=204cc6c6108ed68a352b42b95f8036af&imgtype=0&src=http%3A%2F%2Fimg4.99114.com%2Fgroup1%2FM00%2F0C%2F83%2FwKgGS1lkeTqAItK9AAUVm11-hPY135.jpg"
            alt
          >
        </li> -->
        <li class="detail_list_li" v-for="(img, index) in imgs" :key="index">
          <img :src="img.url" >
          <!-- <img v-lazy="img.url" > -->
        </li>
      </ul>
      <div class="pay_btn" @click="payment">立即支付</div>
    </div>
  </main>
</template>

<script>

// 按需 引入 vant 中的 图片懒加载
import Vue from 'vue';
import { Loading } from 'vant';

Vue.use(Loading);
// import { Lazyload } from 'vant';
// Vue.use(Lazyload, {
//   loading: "../assets/images/loading.gif"
// });

import { getShopLists, getShopInfo } from '../service/getData'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      imgs: [],
      shops: [],
      shop: '',
      isShow: true
    };
  },
  methods: {
    payment() {
      this.$router.push({
        name: "payment"
      });
    },
    // 获取商品列表
    getShops() {
      let id = this.$route.params.id || 1;
      getShopInfo({category_id: 1}).then(res => {
        if(res.code === 1) {
          let data = res.data.list;
          // 循环遍历出对应子id的商品信息
          data.forEach(item => {
            if (item.id == id) {
              this.shops = item
              this.imgs = item.more.photos
              this.shop = item.more.thumbnail
              this.isShow = false
            }
          });
        }
      }).catch(err => console.log(err))
    }
  },
  created() {
    this.getShops();
  },
  computed: mapState([
    'price'
  ])
};
</script>

<style lang="scss" scoped>
@import "../assets/style/mixin.scss";

.detail_header {
  position: relative;
  border-bottom: 1px solid #f3f3f3;
  img {
    width: 100%;
    vertical-align: middel;
  }
  .go_back {
    position: fixed;
    z-index: 20;
    width: 1.28rem;
    left: $p10;
    top: $p10;
  }
}

.name_price {
  padding: $p10 $p15;
  .name {
    @include sc($p14, #333);
    padding-bottom: 4px;
  }
  .price {
    @include sc($p12, #fca90f);
  }
}

.small_title {
  background: #f7f7f7;
  @include sc($p14, #666);
  height: 1.7rem;
  line-height: 1.7rem;
  padding-left: $p10;
}

.detail_list {
  img {
    width: 100%;
    vertical-align: middle;
  }
}

.pay_btn {
  width: 94%;
  border-radius: 4px;
  background: #1bbc9b;
  @include sc($p16, #fff);
  text-align: center;
  height: 1.92rem;
  line-height: 1.92rem;
  position: fixed;
  bottom: $p15;
  left: 50%;
  transform: translateX(-50%);
}
</style>

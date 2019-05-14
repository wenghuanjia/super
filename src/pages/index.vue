<template>
  <main class="main-content">
    <!-- <vheader title="盐联售货"></vheader> -->
    <div class="swiper-content">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/images/banner1.png" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/banner2.png" alt>
        </van-swipe-item>
      </van-swipe>
    </div>

    <figure class="figure-content" style="display:none;">
      <img src="../assets/images/supermarket.png" alt>
      <div class="figcaption-content">
        <figcaption>盐联酒店</figcaption>
        <span>05105610210</span>
      </div>
      <img
        v-if="isShow"
        @click="handleShow"
        class="set-way"
        src="../assets/images/col.png"
        alt
      >
      <img v-else @click="handleHide" class="set-way" src="../assets/images/row.png" alt>
    </figure>

    <!-- <ul v-if="way_flag == 1" class="list_ul_row">
      <router-link :to="'/detail/'+item.id" @click.native="getPrice(item.price)" tag="li" class="list_li" v-for="(item, index) in items" :key="index">
        <img :src="item.more.thumbnail" alt="">
        <div class="title">{{ item.post_title }}</div>
        <div class="price">￥{{ item.price }}</div>
        <div class="sell_out" v-if="item.sell_out_flag">已售空</div>
      </router-link>
    </ul>

    <ul v-if="way_flag == 2" class="list_ul_row_3 list_ul_row">
      <router-link @click.native="getPrice(item.price)" :to="'/detail/'+item.id" tag="li" class="list_li" v-for="(item, index) in items" :key="index">
        <img :src="item.more.thumbnail" alt="">
        <div class="title">{{ item.post_title }}</div>
        <div class="price">￥{{ item.price }}</div>
        <div class="sell_out" v-if="item.sell_out_flag">已售空</div>
      </router-link>
    </ul>

    <ul v-if="way_flag == 3" class="list_ul_col">
      <router-link
        @click.native="getPrice(item.price)"
        :to="'/detail/'+item.id"
        tag="li"
        class="list_li"
        v-for="(item) in items"
        :key="item.id"
      >
        <div class="list_li_img">
          <img :src="item.more.thumbnail" alt="">
        </div>
        <div class="list_li_content">
          <div class="title">{{ item.post_title }}</div>
          <div class="price_sell">
            <div class="price">￥{{ item.price }}</div>
            <div class="sell_out" v-if="item.sell_out_flag">已售空</div>
          </div>
        </div>
      </router-link>
    </ul>

    <ul v-if="way_flag == 4" class="list_ul_col list_ul_col_p">
      <router-link :to="'/detail/'+item.id" @click.native="getPrice(item.price)" tag="li" class="list_li" v-for="(item, index) in items" :key="index">
        <div class="list_li_img">
          <img :src="item.more.thumbnail" alt="">
        </div>
        <div class="list_li_content">
          <div class="title">{{ item.post_title }}</div>
          <div class="price_sell">
            <div class="price">￥{{ item.price }}</div>
            <div class="sell_out" v-if="item.sell_out_flag">已售空</div>
          </div>
        </div>
      </router-link>
    </ul>

    <ul v-if="way_flag == 5" class="list_ul_col_5 list_ul_col">
      <router-link :to="'/detail/'+item.id" @click.native="getPrice(item.price)" tag="li" class="list_li" v-for="(item, index) in items" :key="index">
        <div class="list_li_img">
          <img :src="item.more.thumbnail" alt="">
        </div>
        <div class="list_li_content">
          <div class="title">{{ item.post_title }}</div>
          <div class="price_sell">
            <div class="price">￥{{ item.price }}</div>
            <div class="sell_out" v-if="item.sell_out_flag">已售空</div>
          </div>
        </div>
      </router-link>
    </ul> -->
    <div class="list">
      <ul class="nav">
        <router-link class="nav-item" :to="'detail/3'" tag="li">
          <div class="pic">
            <img src="http://zgcxdz.com:10080/fs/img/jg/j0cUbz0OskZlmKoX9pav4Lk0SA7TOWEL.jpg" alt="">
          </div>
          <div class="desc">
            <p class="p_name">红烧牛肉面套装</p>
            <p class="p_price">¥<span>0.5</span></p>
          </div>
        </router-link>

        <router-link class="nav-item" to="" tag="li">
          <div class="pic">
            <img src="http://zgcxdz.com:10080/fs/img/jg/j0cUbz0OskZlmKoX9pav4Lk0SA7TOWEL.jpg" alt="">
          </div>
          <div class="desc">
            <p class="p_name">红烧牛肉面套装</p>
            <p class="p_price">¥<span>0.5</span></p>
          </div>
        </router-link>

        <router-link class="nav-item" to="" tag="li">
          <div class="pic">
            <img src="http://zgcxdz.com:10080/fs/img/jg/j0cUbz0OskZlmKoX9pav4Lk0SA7TOWEL.jpg" alt="">
          </div>
          <div class="desc">
            <p class="p_name">红烧牛肉面套装</p>
            <p class="p_price">¥<span>0.5</span></p>
          </div>
        </router-link>

        <router-link class="nav-item" to="" tag="li">
          <div class="pic">
            <img src="http://zgcxdz.com:10080/fs/img/jg/j0cUbz0OskZlmKoX9pav4Lk0SA7TOWEL.jpg" alt="">
          </div>
          <div class="desc">
            <p class="p_name">红烧牛肉面套装</p>
            <p class="p_price">¥<span>0.5</span></p>
          </div>
        </router-link>
      </ul>
    </div>
    <!-- <div class="nav-item">
      <div class="pic">
        <img width="100%" src="http://zgcxdz.com:10080/fs/img/sales_advertising/o4SHvigEGEjoECIrujRdu30Bac1WenFe.jpg" alt="">
      </div>
    </div> -->

    <div class="opinion-content">
      <p class="hint">
        <!-- <span>*</span> -->
        提示：由于网络延时等原因，请在支付完一个商品，门打开后，在购买其他商品
      </p>
      <p class="phone">运维：130000000000 13000000000</p>
      <address>广州市盐联信息技术有限公司 欢迎咨询加盟</address>
    </div>
    <!-- <div class="opinion-title">
      <div class="opinion-small-title">留言</div>
      <div class="bg-fff">
        <textarea name rows="4"></textarea>
      </div>
    </div>
    <div class="opinion-btn-content">
      <div class="opinion-btn">确定</div>
    </div> -->
    <router-link class="nav-item" to="/payment" tag="li">
      <div class="pic">        
      </div>
      <div class="desc">
        <p class="p_name">若有需求、意见、 点击留言</p>
        <p class="p_price"></p>
      </div>
    </router-link>
  </main>
</template>

<script>
import { getShopLists } from '../service/getData'
import Vue from "vue";
import axios from 'axios'
import vheader from "components/header/header";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe).use(SwipeItem).use(Lazyload, {
  loading: '../assets/images/loading.gif'
});
export default {
  data() {
    return {
      isShow: true, // 隐藏列表
      way_flag: 2, // 横向排列
      way_flay_copy: 2,
      items: [],
      // items: [
      //   {
      //     title: "草莓",
      //     price: "30.00",
      //     sell_out_flag: true
      //   },
      //   {
      //     title: "草莓",
      //     price: "20.00",
      //     sell_out_flag: true
      //   },
      //   {
      //     title: "草莓",
      //     price: "40.00",
      //     sell_out_flag: true
      //   },
      //   {
      //     title: "草莓",
      //     price: "30.00",
      //     sell_out_flag: false
      //   },
      //   {
      //     title: "草莓",
      //     price: "30.00",
      //     sell_out_flag: true
      //   },
      //   {
      //     title: "草莓",
      //     price: "30.00",
      //     sell_out_flag: false
      //   },
      //   {
      //     title: "草莓",
      //     price: "30.00",
      //     sell_out_flag: true
      //   }
      // ]
    };
  },
  components: {
    vheader: vheader
  },
  methods: {
    getPrice(price) {
      // 派放 vuex 中 actions 的 getPrice，并将对应的价格传递过去
      this.$store.dispatch("getPrice", price);
    },
    handleShow() {
      // 切换图片
      this.isShow = !this.isShow
      // 隐藏商品列表
      this.way_flag = false
    },
    handleHide() {
      // 切换图片
      this.isShow = !this.isShow
      // 展示原来的商品列表
      this.way_flag = this.way_flay_copy
    }
  },
  created () {
    // 获取总的商品列表
    getShopLists().then(res => {
      if (res.code === 1) {
        let i = 30;
        this.items = res.data;
        this.items.forEach(item => {
          item.price = i++;
        });
      }
    })    
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/mixin.scss";

.main-content {
  background: #F0F0F0;
  min-height: 100%;
  height: auto;
  overflow: auto;
}

.swiper-content {
  // margin-top: 1.92rem;
  background: #fff;
  img {
    width: 100%;
    vertical-align: middle;
  }
}

.figure-content {
  background: #fff;
  @include fj(start);
  padding: $p10 $p15;
  align-items: center;
  position: relative;
  img {
    width: 30px;
  }
  .figcaption-content {
    margin-left: $p10;
    @include sc($p16, #333);
    figcaption {
      font-weight: 600;
    }
    span {
      color: #666;
    }
  }
  .set-way {
    position: absolute;
    right: $p15;
    top: 50%;
    transform: translateY(-50%);
  }
}

.list {
  width: 94%;
  margin: 0 3%;
}
.nav-item {
  width: 100%;
  margin-top: 4%;
  position: relative;
  .pic {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .desc {
    width: 40%;
    margin-top: 11px;
    text-align: right;
    font-size: 16px;
    color: #221815;
    position: absolute;
    right: 6%;
    top: 0;
    p {
      // font-size: 0.18rem;
      margin-bottom: 10px;
      line-height: 20px;
    }
  }
}

.list_ul_col {
  background: #fff;
  .list_li {
    display: flex;
    border-radius: 4px;
    width: 100%;
    padding: 0.32rem;
    border-bottom: 1px solid #f7f7f7;
    position: relative;
    .list_li_img {
      width: 30%;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .list_li_content {
      width: 70%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      .title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 4px $p10 0;
        @include sc($p14, #333);
      }
      .price_sell {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .price {
          padding: 0 $p10 4px;
          @include sc($p12, #fca90f);
        }
        .sell_out {
          @include sc($p14, #f72000);
        }
      }
    }
  }
}

.list_ul_col_p {
  padding: $p10;
  background: #f7f7f7;
  .list_li {
    background: #fff;
    border: none;
    margin-bottom: $p10;
  }
  .sell_out {
    position: absolute;
    top: $p10;
    right: $p10;
  }
}

.list_ul_col_5 {
  background: #f7f7f7;
  .list_li {
    background: #fff;
    flex-flow: column nowrap;
    border: none;
    margin-top: $p10;
    .list_li_img {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: $p20 0;
      width: 100%;
      border-bottom: 1px solid #f7f7f7;
      img {
        width: 30%;
      }
    }
    .list_li_content {
      width: 100%;
    }
  }
}

.list_ul_row {
  display: flex;
  flex-wrap: wrap;
  .list_li {
    border-radius: 4px;
    background: #fff;
    width: 46%;
    margin: 0.32rem;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    .title {
      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 4px $p10 0;
      @include sc($p14, #333);
    }
    .price {
      padding: 0 $p10 4px;
      @include sc($p12, #fca90f);
    }
    .sell_out {
      position: absolute;
      bottom: $p15;
      right: $p10;
      @include sc($p14, #f72000);
    }
  }
}

.list_ul_row_3 {
  > .list_li {
    width: 32%;
    margin: 0.1rem;
    > .title {
      width: 57%;
    }
  }
}

.opinion-content {
  background: #000;
  margin: 4% 3%;
  @include sc($p12, #fff);
  padding: $p10;
  .hint {
    padding-bottom: 4px;
    color: #fff;
  }
  .phone {
    color: #fff;
    // @include sc($p14, #333);
  }
}

.opinion-title {
  margin-top: $p10;
  .opinion-small-title {
    background: #fff;
    height: 1.72rem;
    line-height: 1.72rem;
    text-align: center;
    @include sc($p14, #333);
  }
  .bg-fff {
    padding: 0px $p10 $p10;
    background: #ffffff;
    textarea {
      background: #f7f7f7;
      width: 100%;
      @include sc($p12, #333);
    }
  }
}

.opinion-btn-content {
  background: #fff;
  overflow: auto;
  .opinion-btn {
    margin: $p15 $p10;
    background: #1bbc9b;
    text-align: center;
    @include sc($p14, #fff);
    height: 1.72rem;
    line-height: 1.72rem;
    border-radius: 4px;
  }
}
</style>

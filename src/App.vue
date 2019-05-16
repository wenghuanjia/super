<template>
  <div class="App">
    <!-- <transition :name="transitionName"> -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- </transition> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  created() {
    // 在页面加载时读取 sessionStorage 里的状态信息
    if (sessionStorage.getItem("price")) {
      sessionStorage.getItem("price") &&
        this.$store.replaceState(JSON.parse(sessionStorage.getItem("price")));
    }
    // 在页面刷新时将 vuex 里的信息保存到 sessionStorage 里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("price", JSON.stringify(this.$store.state));
    });
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style lang="scss">
@import "./assets/style/common";

// 引入字体图标
@import "./assets/style/iconfont/iconfont.css";

.van-toast div,
.van-loading__circular {
  color: #fff;
}

#app,
.App {
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

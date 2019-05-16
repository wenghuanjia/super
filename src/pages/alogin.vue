<template>
  <div id="login">
    <header>
      <div class="head">
        <h2>登录</h2>
      </div>
    </header>
    <article>
      <section>
        <form class="form" @submit.prevent="sublogin">
          <div class="form-row line">
            <img src="../assets/images/tel-icon.png" alt>
            <input type="text" placeholder="请输入账号" v-model="username">
          </div>
          <div class="form-row">
            <img src="../assets/images/pwd-icon.png" alt>
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <input type="submit" value="登录" class="submit" @click="sublogin">
        </form>
      </section>
    </article>
    <!-- <div class="login-container">
            <div class="logo">
                <img src="http://qiniu.gzwmdy.cn/20190326113529.png" alt="">
            </div>
            <form class="form" @submit.prevent="sublogin">
                <div class="form-row">
                    <img src="../assets/images/phone.png" alt="">
                    <input type="text" placeholder="请输入用户名" v-model="username" >
                </div>
                <div class="form-row">
                    <img src="../assets/images/password.png" alt="">
                    <input type="password" placeholder="请输入登录密码" v-model="password">
                </div>
                <input type="submit" value="登录" class="submit" @click="sublogin" />
            </form>
    </div>-->
  </div>
</template>

<script>
import { login } from "service/getData.js";
import { setStore, getStore } from "assets/js/common.js";
import { Toast } from "vant";
export default {
  name: "login",
  data() {
    return {
      username: "", // 手机号
      password: "", // 密码
      flag: false
    };
  },
  created() {
    var token = getStore("token");
    if (token) {
      this.$router.push({ path: "index" });
    }
  },
  methods: {
    // 登录
    sublogin() {
      if (this.flag) {
        return;
      }
      this.flag = true;
      if (!this.username) {
        Toast("请输入用户名!");
        return;
      } else if (!this.password) {
        Toast("请输入密码!");
        return;
      }
      login({
        username: this.username,
        password: this.password,
        device_type: "mobile"
      }).then(res => {
        if (res.code == 1) {
          Toast(res.msg);
          res = res.data;
          setStore("token", res.token);
          setStore("user", res.user);
          this.$router.push({ path: "index" });
        }

        if (res.code == 0) {
          Toast(res.msg);
        }

        this.flag = false;
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/style/mixin.scss";
#login {
  height: 100%;
  background: #f2f2f2;
}
.line::after {
	content: '';
	position: absolute;
	top: 34%;
	left: 50%;
	transform: translate(-50%);
	display: block;
	width: 94%;
	height: 1px;
	background: #ccc;
}
.head {
  width: 100%;
  height: 47px;
  text-align: center;
  background: #50c291;
  h2 {
    line-height: 47px;
    font-size: 18px;
    font-weight: normal;
    color: #fff;
  }
}
.form {
	position: relative;
  .form-row {
		padding: 10px 0;
		background: #fff;
		img {
			margin-left: 4%;
			height: 18px;
			width: 16px;
			vertical-align: middle;
		}
		input {
			vertical-align: middle;
			font-size: 12px;
		}
	}
  .submit {
    margin-top: 15px;
    width: 92%;
    margin-left: 4%;
    padding: 10px 0;
    background: #3fc9cb;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    font-size: 14px;
  }
}
// ---------第一版登录样式-----------

// input {
//   background: transparent;
// }
// #login {
//   padding: 0;
//   background: #ffffff;
//   background-size: 100% 100%;
//   .login-container {
//     background: url("http://qiniu.gzwmdy.cn/20190104142631.png") left bottom
//       no-repeat;
//     background-size: 100% 30%;
//     width: 100%;
//     height: 100vh;
//     .logo {
//       position: relative;
//       height: 8rem;
//       background: url("http://qiniu.gzwmdy.cn/20190104142618.png") center center
//         no-repeat;
//       background-size: 100% 100%;
//       > img {
//         @include wh(4rem, 4rem);
//         @include center;
//       }
//       &:after {
//         content: "";
//         display: block;
//         position: absolute;
//         left: 0px;
//         bottom: -1px;
//         @include wh(100%, 1.5rem);
//         background: url("http://qiniu.gzwmdy.cn/20181228094955.png") center
//           center no-repeat;
//         background-size: 100% 100%;
//       }
//     }
//     .form {
//       padding: 0 15px;
//       .form-row {
//         @include fj(flex-start);
//         @include wh(100%, 44px);
//         align-items: center;
//         padding-bottom: 5px;
//         margin-bottom: 10px;
//         border-bottom: 1px solid #e6e6e6;
//         > img {
//           @include wh(1rem, 1rem);
//           vertical-align: middle;
//           margin-right: 4px;
//         }
//         > input {
//           @include sc(0.5973rem, #000);
//           flex: 1;
//           // height: 34px;
//           padding-left: 5px;
//         }
//       }
//       .submit {
//         @include btn();
//         margin: 1.5rem 0;
//       }
//     }
//   }
// }
</style>

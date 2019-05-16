import App from '../App'
const index = r => require.ensure([], () => r(require('pages/index')), 'index') // 首页
const payment = r => require.ensure([], () => r(require('pages/payment')), 'payment') // 支付
const payAfter = r => require.ensure([], () => r(require('pages/payAfter')), 'payAfter') // 支付
const rechargeInfo = r => require.ensure([], () => r(require('pages/rechargeInfo')), 'rechargeInfo') // 支付信息
const message = r => require.ensure([], () => r(require('pages/message')), 'message') // 支付信息
const detail = r => require.ensure([], () => r(require('pages/detail')), 'detail') // 详情
const admin = r => require.ensure([], () => r(require('pages/admin')), 'admin') // 后台首页
const alogin = r => require.ensure([], () => r(require('pages/alogin')), 'alogin') // 后台登录
const alist = r => require.ensure([], () => r(require('pages/alist')), 'alist') // 后台登录
const aorder = r => require.ensure([], () => r(require('pages/aorder')), 'aorder') // 后台订单
const acollent = r => require.ensure([], () => r(require('pages/acollent')), 'acollent') // 后台汇总查询
const arecord = r => require.ensure([], () => r(require('pages/arecord')), 'arecord') // 后台补货几率
const awraning = r => require.ensure([], () => r(require('pages/awraning')), 'awraning') // 后台警示
const auser = r => require.ensure([], () => r(require('pages/auser')), 'auser') // 后台用户管理
const toggle = r => require.ensure([], () => r(require('pages/toggle')), 'toggle') // 后台用户管理
const aadduser = r => require.ensure([], () => r(require('pages/aadduser')), 'aadduser') // 后台添加账户
const afacility = r => require.ensure([], () => r(require('pages/afacility')), 'afacility') // 后台管理设备
const asetname = r => require.ensure([], () => r(require('pages/asetname')), 'asetname') // 后台修改设备名称
const alistdetail = r => require.ensure([], () => r(require('pages/alistdetail')), 'alistdetail') // 后台类表详情


const routes = [
  {
    path: '/',
    component: App,
    meta: {
      keepAlive: true,
    },
    children: [
      {
        path: '',
        redirect: '/index',
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/index',
        component: index,
        meta: {
          title: '无人超市',
          keepAlive: true,
          index: 1
        }
      },
      {
        path: '/detail/:id',
        component: detail,
        meta: {
          title: '详情',
          index: 2
        }
      },
      {
        path: '/payment',
        name:　'payment',
        component: payment,
        meta: {
          title: '支付',
          index: 3
        }
      },
      {
        path: '/payAfter',
        name:　'payAfter',
        component: payAfter,
        meta: {
          title: '支付'
        }
      },
      {
        path: '/rechargeInfo',
        name:　'rechargeInfo',
        component: rechargeInfo,
        meta: {
          title: '支付'
        }
      },
      {
        path: '/message',
        name:　'message',
        component: message,
        meta: {
          title: '留言'
        }
      },
      {
        path: '/admin',
        component: admin,
        meta: {
          title: '无人超市后台'
        }
      },
      {
        path: '/alogin',
        component: alogin,
        meta: {
          title: '无人超市后台'
        }
      },
      {
        path: '/alist',
        component: alist,
        meta: {
          title: '补货窗口'
        }
      },
      {
        path: '/aorder',
        component: aorder,
        meta: {
          title: '订单'
        }
      },
      {
        path: '/acollent',
        component: acollent,
        meta: {
          title: '汇总查询'
        }
      },
      {
        path: '/arecord',
        component: arecord,
        meta: {
          title: '补货几率'
        }
      },
      {
        path: '/awraning',
        component: awraning,
        meta: {
          title: '警示'
        }
      },
      {
        path: '/toggle',
        component: toggle,
        meta: {
          title: '界面管理'
        }
      },
      {
        path: '/auser',
        component: auser,
        meta: {
          title: '账户管理'
        }
      },
      {
        path: '/aadduser',
        component: aadduser,
        meta: {
          title: '添加账户'
        }
      },
      {
        path: '/afacility',
        component: afacility,
        meta: {
          title: '设备管理'
        }
      },
      {
        path: '/asetname',
        component: asetname,
        meta: {
          title: '修改设备名称'
        }
      },
      {
        path: '/alistdetail',
        component: alistdetail,
        meta: {
          title: '详情'
        }
      }
    ]
  }
]

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes,
  linkActiveClass: 'active',
	scrollBehavior (to, from, savedPosition) {
    if (to.meta.title) {
      document.title = to.meta.title
    }
  }
})

export default router;
<template>
    <div class="acollent-main">
        <vheader :goBack="true" title="汇总查询" background="#1BBC9B" color="#fff"></vheader>
        <div class="acollent-content">
            <form @submit.prevent="sublogin" class="acollent-form">
                <div>
                    <input type="text" v-model="terminal" placeholder="请输入机器ID">
                </div>
                <div>
                    <input type="text" v-model="show_time" placeholder="请选择时间" @click="date_show = true">
                </div>
                <div class="form-submit">
                    <input type="submit" value="搜索">
                </div>
            </form>
            <ul class="acollent-list">
                <li class="acollent-li" v-for="(item, index) in record_list" :key="index">
                    <h3 class="order-title">{{ item.order_title }}</h3>
                    <div class="order-time">
                        <img src="../assets/images/icon1.png" alt="">
                        {{ item.order_time }}
                    </div>
                    <div class="order-pirce">
                        (门编号：{{ item.order_num }})
                    </div>
                    <h2 class="order-detail">
                        {{ item.order_name }}
                    </h2>
                </li>
            </ul>
            <van-popup v-model="date_show" position="bottom" :overlay="true">
                <van-datetime-picker v-model="time" type="date" :max-date="new Date()" @confirm="set_show_time"  @cancel="date_show = false"/>
            </van-popup>
        </div>
    </div>
</template>

<script>
import vheader from "components/header/header";
import { formatDate } from "assets/js/common";
import { DatetimePicker, Popup } from 'vant';
import Vue from 'vue';

Vue.use(DatetimePicker).use(Popup);
export default {
    components: {
        vheader: vheader
    },
    data () {
        return {
            terminal: '',
            time: new Date(),
            show_time: '',
            date_show: false, // 时间选择器显示隐藏
            record_list: [
                {
                    order_title: 'D201903211056090387167',
                    order_time: '2019-03-21 10:56:14',
                    order_handle: '开门成功',
                    order_pirce: 0.4,
                    order_num: 2,
                    order_client: '微信',
                    order_name: '20190313000491(饼干牛奶套装（测试用）)'
                },
                {
                    order_title: 'D201903211056090387167',
                    order_time: '2019-03-21 10:56:14',
                    order_handle: '开门成功',
                    order_pirce: 0.4,
                    order_num: 2,
                    order_client: '微信',
                    order_name: '20190313000491(饼干牛奶套装（测试用）)'
                }
            ]
        }
    },
    methods: {
        // 时间选择器确定
        set_show_time () {
            this.show_time = formatDate(this.time);
            this.date_show = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/style/mixin.scss";

    .acollent-main {
        overflow: auto;
        .acollent-content {
            margin-top: 1.92rem;
            .acollent-form {
                display: flex;
                align-items: center;
                padding: $p10;
                @include sc($p14, #333);
                > div {
                    @include wh(41%, $p30);
                    margin-right: 2%;
                    input[type=text] {
                        @include wh(100%, 100%);
                        padding: $p4 $p10;
                        background: #F7F7F7;
                    }
                }
                .form-submit {
                    flex: 1;
                    margin: 0;
                    input[type=submit] {
                        @include wh(100%, 100%);
                        color: #fff;
                        background: #1BBC9B;
                    }
                }
            }
            .acollent-li {
                @include bl15();
                padding: $p10;
                line-height: $p30;
                .order-title {
                    font-size: $p14;
                }
                .order-pirce, .order-time {
                    display: flex;
                    align-items: center;
                    font-size: $p14;
                    img {
                        width: $p18;
                        vertical-align: middle;
                        margin-right: $p10;
                    }
                }
                .order-detail {
                    @include sc($p12, #333);
                }
            }
            .date-model {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
            }
        }
    }
</style>

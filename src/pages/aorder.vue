<template>
    <div class="order-content">
        <vheader :goBack="true" title="订单" background="#1BBC9B" color="#fff"></vheader>
        <section class="acollent-income">
            <div>
                总额
                <div>{{ rental }}</div>
            </div>
            <div>总利润
                <div>{{ profit }}</div>
            </div>
            <div>
                昨日
                <div>{{ old_price }}</div>
            </div>
        </section>
        <ul class="order-ul">
            <li class="order-li" v-for="(item, index) in order_item" :key="index">
                <h3 class="order-title">{{ item.order_title }}</h3>
                <div class="order-time">
                    <img src="../assets/images/icon1.png" alt="">
                    {{ item.order_time }}{{ item.order_handle }}
                </div>
                <div class="order-pirce">
                    <img src="../assets/images/icon4.png" alt="">
                    价格 ：{{ item.order_pirce }}元　　(门编号：{{ item.order_num }})
                </div>
                <div class="order-start">
                    <img src="../assets/images/yw.png" alt="">
                </div>
                <h2 class="order-detail">
                    <span>{{ item.order_name }}</span>
                    <span>{{ item.order_client }}</span>
                </h2>
            </li>
        </ul>
    </div>
</template>

<script>
import vheader from "components/header/header"
export default {
    components: {
        vheader: vheader
    },
    data () {
        return {
            rental: 0.90,
            profit: 0.90,
            old_price: 0.90,
            order_item: [
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
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/style/mixin.scss";
    
    .order-content{
        overflow: auto;
    }
    
    .acollent-income {
        display: flex;
        justify-content: space-between;
        background: #1BBC9B;
        padding: $p15 0px;
        margin-top: 1.92rem;
        > div {
            flex: 1;
            padding: $p6 0;
            text-align: center;
            @include sc($p12, #fff);
            border-right: 1px solid #7BCBA9;
            &:last-child {
                border: none;
            }
            > div {
                @include sc($p16, #fff);
                margin-top: $p6;
            }
        }
    }

    .order-ul {
        .order-li {
            padding: $p10;
            @include bl15();
            @include sc($p12, #333);
            position: relative;
            line-height: $p30;
            .order-title {
                font-size: $p14;
            }
            .order-pirce, .order-time {
                display: flex;
                align-items: center;
                
                img {
                    width: $p18;
                    vertical-align: middle;
                    margin-right: $p10;
                }
            }
            .order-start {
                position: absolute;
                right: $p10;
                bottom: $p30;
                img {
                    width: $p47;
                }
            }
            .order-detail {
                display: flex;
                justify-content: space-between;
                @include sc($p12, #333);
            }
        }
    }
    
</style>

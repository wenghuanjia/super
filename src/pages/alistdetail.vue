<template>
    <div class="list_detail">
        <vheader :goBack="true" title="详情" background="#1BBC9B" color="#fff"></vheader>

        <ul class="list_ul_row">
            <li class="list_li" v-for="(item, index) in items" :key="index">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553496406304&di=f6a041d17360e06593df560422bff847&imgtype=0&src=http%3A%2F%2Fimage.benlailife.com%2FProductNewDetailImage%2F0102021194C%2F001.jpg" alt="">
                <div class="title">{{ item.time }}</div>
                <div class="title">{{ item.title }}</div>
                <div class="num">
                    <span>容量{{ item.capacity }}</span>
                    <span>缺{{ item.lack }}</span>
                </div>
                <div class="handle">
                    <span>开门</span>
                    <span>补货</span>
                </div>
            </li>
        </ul>

        <footer class="list_detail_footer">
            <div>一键开门</div>
            <div>一键清空</div>
            <div>一键填满</div>
        </footer>
    </div>
</template>

<script>
import vheader from "components/header/header";

export default {
    components: {
        vheader: vheader
    },
    data () {
        return {
            items: [
                {
                    time: '补货时间:03-21',
                    title: '安全套（测试用）',
                    capacity: '1',
                    lack: 0,
                },
                {
                    time: '补货时间:03-21',
                    title: '安全套（测试用）',
                    capacity: '1',
                    lack: 0,
                },
            ]
        }
    }    
}
</script>

<style lang="scss" scoped>
    @import "../assets/style/mixin.scss";

    .list_detail {
        height: 100%;
        background: #F6F6FA;
    }

    .list_ul_row {
        padding: $p45 0;
        display: flex;
        flex-wrap: wrap;
        .list_li {
            border-radius: 4px; 
            background: #fff;
            width: 46%;
            margin: 0.32rem;
            position: relative;
            img {
                @include wh($p100, $p45);
                display: block;
                margin: $p10 auto;
                vertical-align: middle;
            }
            .title {
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding: 4px $p10 0;
                @include sc($p14, #333);
            }
            .num, .handle {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: $p12;
                line-height: $p25;
                span {
                    flex: 1;
                    text-align: center;
                    color: $theme;
                }
            }
            > .handle {
                background: $theme;
                line-height: $p30;
                span {
                    @include sc($p14, #fff);
                    text-align: center;
                }
            }
        }
    }

    .list_detail_footer {
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background: $theme;
        display: flex;
        div {
            flex: 1;
            text-align: center;
            line-height: $p45;
            @include sc($p14, #fff);
            border-left: 1px solid #EBEBEB;
            &:first-child {
                border: none;
            }
        }
    }
</style>

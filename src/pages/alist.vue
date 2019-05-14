<template>
    <div class="alist-content">
        <search @searchfun="searchfun"></search>  
        <van-tabs v-model="active" :swipeable="true" :animated="true" color="#1BBC9B" title-active-color="#1BBC9B" title-inactive-color="#333333">
            <van-tab title="在线" class="vatab">
                <div v-if="items.length">
                    <van-radio-group v-model="radio">
                        <router-link to="alistdetail" tag="div" class="tab-item" v-for="(item, index) in items" :key="index">
                            <div class="tab-item-title">{{ item.title }}</div>
                            <div class="tab-item-num">{{ item.num }}<span>{{ item.percent }}%</span></div>
                            <div class="tab-item-date">{{ item.date }}</div>
                            <div class="item-radio" @click.stop>
                                <van-radio :name="item.id"></van-radio>
                            </div>
                        </router-link>
                    </van-radio-group>
                </div>
                <div v-else>当前没有设备哦！</div>
            </van-tab>
            <van-tab title="离线">
                
            </van-tab>
            <van-tab title="待补货">
                
            </van-tab>
        </van-tabs>
        <div class="add-user" @click="go_allot">分配权限</div>
    </div>
</template>


<script>
import { Tab, Tabs, RadioGroup, Radio, Toast } from 'vant';
import Vue from 'vue';
import search from 'components/search/search';

Vue.use(Tab).use(Tabs).use(RadioGroup).use(Radio).use(Toast);
export default {
    components: {
        search: search
    },
    data () {
        return {
            active: 0,
            radio: '',
            items: [
                {
                    title: '盐联酒店',
                    num: '05105610210',
                    percent: 30,
                    date: '2019-03-05 23:01',
                    id: 1
                },
                {
                    title: '盐联酒店',
                    num: '05105610210',
                    percent: 30,
                    date: '2019-03-05 23:01',
                    id: 2
                },
                {
                    title: '盐联酒店',
                    num: '05105610210',
                    percent: 30,
                    date: '2019-03-05 23:01',
                    id: 3
                }
            ]
        }
    },
    methods: {
        // 搜索
        searchfun (date) {
            console.log(date)
        },
        // 分配
        go_allot () {
            if (this.radio) {
                this.$router.push({path: 'asetname', query: {id: this.radio}});
            } else {
                Toast('轻选择设备！');
            }
        }
    }
}
</script>



<style lang="scss" scoped>
    @import "../assets/style/mixin.scss";

    
    .tab-item {
        padding: $p10;
        @include bl15();
        .tab-item-title {
            @include sc($p16, #333);
            font-weight: 600;
        }
        .tab-item-num {
            @include sc($p14, #666);
            span {
                margin-left: $p30;
                @include sc($p16, #666);
            }
        }
        .tab-item-date {
            @include sc($p12, #999);
        }
        .item-radio {
            position: absolute;
            right: $p10;
            bottom: 50%;
            transform: translateY(50%);
            @include sc($p12, #333);
            > span:first-child {
                margin-right: $p10;
            }
        }
    }
    .add-user {
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: $p45;
        line-height: $p45;
        text-align: center;
        background: #5F81EE;
        @include sc($p16, #fff);
    }
</style>

<style lang="scss">
    .van-tab--active {
        > span {
            color: #1BBC9B;
        }
    }

    .van-tabs__content {
        position: fixed;
        top: 84px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        
    }

    .vatab {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
    }
</style>
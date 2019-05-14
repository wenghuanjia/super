<template>
    <div class="adduser">
        <vheader :goBack="true" title="修改设备名称" background="#1BBC9B" color="#fff"></vheader>
        <form @submit.prevent="sublogin" class="add-form">
            <input type="text" v-model="name" placeholder="请输入设备新名称">
            <input type="submit" value="确认修改">
        </form>
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
            name: '',
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/mixin.scss';

    .add-form {
        padding: $p55 $p10 $p10;
        input[type=text] {
            display: block;
            border: 1px solid #DDDDDD;
            padding: $p10;
            margin-bottom: $p15;
            width: 100%;
            font-size: $p14;
        }
        input[type=submit] {
            @include btn();
        }
    }
</style>

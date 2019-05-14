<template>
    <div class="adduser">
        <vheader :goBack="true" title="添加账户" background="#1BBC9B" color="#fff"></vheader>
        <form @submit.prevent="sublogin" class="add-form">
            <input type="text" v-model="user" placeholder="请输入账号">
            <input type="text" v-model="name" placeholder="请输入姓名">
            <input type="text" v-model="phone" placeholder="请输入手机号">
            <input type="password" v-model="password" placeholder="请输入密码">
            <input type="password" v-model="psd" placeholder="请再次输入密码">
            <input type="submit" value="添加">
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
            user: '',
            name: '',
            phone: '',
            password: '',
            psd: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/mixin.scss';

    .add-form {
        padding: $p55 $p10 $p10;
        input[type=text], input[type=password] {
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

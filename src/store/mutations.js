import {
    GETPRICE,
    PRICEINFO
} from "./mutation-types"

export default {
    // 记录价钱信息
    [GETPRICE] (state, data) {
        state.price = data;
        window.sessionStorage.setItem('price', data)
    }
}

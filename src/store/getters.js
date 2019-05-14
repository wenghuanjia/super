export default {
    getPrice (state) {
        console.log(state)
        if (!state.price) {
            //从sessionStorage中读取状态
            state.price = sessionStorage.getItem('price');
        }
        return state.price
    }
}

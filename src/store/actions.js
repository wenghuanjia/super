import {
    GETPRICE
} from "./mutation-types"

export default {
    getPrice(context, data) {
        context.commit(GETPRICE, data);
    }
}

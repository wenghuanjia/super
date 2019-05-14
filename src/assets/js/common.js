/**
 * 存储localStorage
 * @param {string} name 健名
 * @param {string,object} content 健值
 * @param { bool } content true为存session，false为存local
 */
export const setStore = (name, content, flag) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    flag ? window.sessionStorage.setItem(name, content) : window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 * @param {string} name 健名
 * @param { bool } content true为查session，false为查local
 */
export const getStore = (name, flag) => {
    if (!name) return;
    return flag ? window.sessionStorage.getItem(name) : window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 * @param {string} name 健名
 * @param { bool } content true为删session，false为删local
 */
export const removeStore = (name, flag) => {
    if (!name) return;
    flag ? window.sessionStorage.removeItem(name) : window.localStorage.removeItem(name);
}

// 换取时间格式： 年-月-日
export const formatDate = (value) => {
    return value.getFullYear() + '-' + ((value.getMonth() + 1) <= 9 ? '0' + (value.getMonth() + 1) : (value.getMonth() + 1)) + '-' + (value.getDate() <= 9 ? '0' + value.getDate() : value.getDate());
}
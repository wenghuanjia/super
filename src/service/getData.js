import axios from './fetch.js'

// 登录
export const login = (data) => axios('/user/public/login', data, 'POST');

// 获取分类文章
export const getCategoryPostLists = (data) => axios('/portal/lists/getCategoryPostLists', data);

// 获取分类文章详情
export const articles = (data) => axios(`/portal/articles`, data);

// 获取所有的商品列表
export const getShopLists = (data) => axios('/portal/articles', data);

// 获取商品信息
export const getShopInfo = (data) => axios('/portal/lists/getCategoryPostLists', data);

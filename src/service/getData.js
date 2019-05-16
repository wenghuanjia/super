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

// 获取设备是否在线
export const IsOnline = () => axios('/home/index/index')

// 获取首页列表设备状态
export const getShopsStatus = () => axios('/home/index/openStatus')

// 获取单个商品开关设备状态 加入商品对应 id
export const getShopStatus = (data) => axios('/home/index/openStatusEvery', data)

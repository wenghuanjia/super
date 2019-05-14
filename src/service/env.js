let host = '';
let imgBaseUrl = '';


// 开发环境
// if (process.env.NODE_ENV == 'development') {
//     host = "http://sound.gzwmdy.cn/api";
//     imgBaseUrl = "http://qiniu.gzwmdy.cn/";
// // 线上环境
// }else if(process.env.NODE_ENV == 'production'){
//     host = "http://sound.gzwmdy.cn/api";
//     imgBaseUrl = "http://qiniu.gzwmdy.cn/";
// }

if (process.env.NODE_ENV == 'development') {
    host = "http://kaisuo123.cn1.utools.club/api";
// 线上环境
}else if(process.env.NODE_ENV == 'production'){
    host = "http://kaisuo123.cn1.utools.club/api";
}

export {
	host
}
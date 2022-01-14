import axios from 'axios';
const appUrl = 'http://101.200.43.114:8365'
/**
 * 请求失败后的错误统一处理
 * @param {number} code 请求失败的状态码
 */
// const handleError = (code) => {
//   switch (code) {
//     case 401:
//       // do something ...
//       // 这里要清除一些全局的loading哦，例如 vant: Toast.clear()
//       router.push("/Login");
//       break;

//     default:
//       break;
//   }
// };
// create an axios instance
const service = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  baseURL: appUrl, // .env中配置的api前缀
  timeout: 5000, // request timeout
});
import router from '../router';
import {  Toast } from 'vant';
// 接口请求成功的时候，会进入第一个参数函数，接口请求后台报错的时候，会进入第二个参数函数
service.interceptors.response.use(data => {
	// 参数data为后台返回的数据，接口请求成功，把data返回出去，并把加载动画关闭
    // let loadinginstace = Loading.service({});
    // loadinginstace.close()
    return data
},error => {
	// 调用接口后台报错，把加载动画关闭，并把加载动画关闭
    // let loadinginstace = Loading.service({});
    // loadinginstace.close()
    // 参数error为报错信息，这里要注意，打印出来的error是一段错误信息，不是一个对象，但是error.response.status却是后台返回的报错的错误码
    console.log(error)
    console.log(error.response.status)
    if(error.response.status == 500){
        Toast.fail('token失效');
        router.push('/login')
        return Promise.resolve(error.response);
    }
    // Message.error({
    //      message: 'error'
    // })
})

// 登录请求方法
const loginreq = (method, url, params) => {
    url = appUrl+ url
    return service({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: params,
        traditional: true,
        transformRequest: [
            function(data) {
                let ret = ''
                for (let it in data) {
                    ret +=
                        encodeURIComponent(it) +
                        '=' +
                        encodeURIComponent(data[it]) +
                        '&'
                }
                return ret
            }
        ]
    }).then(res => res.data);
};
// 通用查询公用方法
const req = (method, url, params) => {
    url = appUrl+url
    return service({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: localStorage.getItem('logintoken')
        },
        data: params,
        traditional: true,
        transformRequest: [
            function(data) {
                let ret = ''
                for (let it in data) {
                    ret +=
                        encodeURIComponent(it) +
                        '=' +
                        encodeURIComponent(data[it]) +
                        '&'
                }
                return ret
            }
        ]
    }).then(res => res.data);
};
// 通用修改公用方法 json传参
const reput = (method, url, params) => {
    url = appUrl+url
    return service({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('logintoken')
        },
        data: params,
    }).then(res => res.data);
};

// 参数通过 ? query String  parament 拼接在ulr
const reget = (method, url, params) => {
    url = appUrl+url
    return service({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: localStorage.getItem('logintoken')
        },
        params: params,
        traditional: true,
        transformRequest: [
            function(data) {
                let ret = ''
                for (let it in data) {
                    ret +=
                        encodeURIComponent(it) +
                        '=' +
                        encodeURIComponent(data[it]) +
                        '&'
                }
                return ret
            }
        ]
    }).then(res => res.data);
};
// 参数通过 ? query String  parament 拼接在ulr 不使用登录令牌
const reget_n = (method, url, params) => {
    url = appUrl+url
    let headrs = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: localStorage.getItem('logintoken')
    };
    if (headrs.Authorization == null) delete headrs.Authorization;
    return service({
        method: method,
        url: url,
        headers: headrs,
        params: params,
        traditional: true,
        transformRequest: [
            function(data) {
                let ret = ''
                for (let it in data) {
                    ret +=
                        encodeURIComponent(it) +
                        '=' +
                        encodeURIComponent(data[it]) +
                        '&'
                }
                return ret
            }
        ]
    }).then(res => res.data);
};
// 通用修改公用方法 json传参 不使用登录令牌
const reput_n = (method, url, params) => {
    url = appUrl+url
    let headrs = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: localStorage.getItem('logintoken')
    };
    if (headrs.Authorization == null) delete headrs.Authorization;

    return service({
        method: method,
        url: url,
        headers: headrs,
        data: params,
    }).then(res => res.data);
};
// 参数通过 / 拼接在url、
const delt = (method, url, data) => {
    url = appUrl+ url
    if (Object.keys(data).length) {
        for (let key in data) {
            url += `/${data[key]}`;
        }
    }
    return service({
        method: method,
        url: url,
        headers: {
            Authorization: localStorage.getItem('logintoken')
        }
    }).then(res => res.data);
};

export {
    loginreq,
    req,
    reput,
    reget,
    reget_n,
    reput_n,
    delt
}
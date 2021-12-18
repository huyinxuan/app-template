import axios from 'axios';

// 登录请求方法
const loginreq = (method, url, params) => {
    return axios({
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
    return axios({
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
    return axios({
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
    return axios({
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
    let headrs = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: localStorage.getItem('logintoken')
    };
    if (headrs.Authorization == null) delete headrs.Authorization;
    return axios({
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
    let headrs = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: localStorage.getItem('logintoken')
    };
    if (headrs.Authorization == null) delete headrs.Authorization;

    return axios({
        method: method,
        url: url,
        headers: headrs,
        data: params,
    }).then(res => res.data);
};
// 参数通过 / 拼接在url、
const delt = (method, url, data) => {
    if (Object.keys(data).length) {
        for (let key in data) {
            url += `/${data[key]}`;
        }
    }
    return axios({
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
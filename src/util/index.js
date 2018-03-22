/**
 * Created by lihanying on 2018/3/8.
 */
import 'whatwg-fetch'

export function fetchData(endpoint) {
    let myHeader = {
        headers: {
            "Accept"       : 'application/json',
            'Content-Type' : 'application/json',
        },
        method : 'GET',
    };
    return fetch(endpoint, myHeader)
        .then(res=> {
            return res.json()
        })
        .catch(e=> {
            console.log(e.message);
        })
}
export function postData(endpoint, method = 'post', body = {}) {
    let methods  = ['GET', 'POST', 'DELETE', 'PUT'];
    let myHeader = {
        headers: {
            "Accept"       : 'application/json',
            'Content-Type' : 'application/json'
        },
        method : methods[methods.indexOf(method.toUpperCase())],
        body   : body
    };
    return fetch(endpoint, myHeader)
        .then(res => {
            return res.json()
        })
        .catch(e => {
            console.log(e.message)
        })
}
export function obj_to_query(path = '/', obj) {
    let parts = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return path + "?" + parts.join('&');
}
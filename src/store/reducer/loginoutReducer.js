import {LOGIN} from '../constant/loginoutConstant'
const initValue = window.sessionStorage.getItem("userInfo")==="[object Object]"?null:window.sessionStorage.getItem("userInfo");
export  default function  reducer(preState=initValue,action) {
    let {type,data} = action
    switch (type) { 
        case LOGIN:
          return data
        default:
            return preState
    }
}
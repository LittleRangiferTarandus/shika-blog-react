import {LOGIN} from '../constant/loginoutConstant'
let initValue
try {
  initValue =  JSON.parse(window.localStorage.getItem("userInfo"));
} catch (error) {
  initValue = null
}
 
export  default function  reducer(preState=initValue,action) {
    let {type,data} = action
    switch (type) { 
        case LOGIN:
          window.localStorage.setItem("userInfo",JSON.stringify(data))
          return data
        default:
            return preState
    }
}
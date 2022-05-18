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
          
          return data
        default:
            return preState
    }
}
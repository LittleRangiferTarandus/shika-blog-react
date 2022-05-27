import {LOGIN,UPDATE_AVATAR} from '../constant/loginoutConstant'
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
        case UPDATE_AVATAR:
          let currentState = JSON.parse(JSON.stringify(preState))
          currentState.avatar = data
          return currentState
        default:
            return preState
    }
}
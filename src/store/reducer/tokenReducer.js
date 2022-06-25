import {LOGIN_TOKEN} from '../constant/tokenConstant'
let initValue
try {
  initValue =  JSON.parse(window.localStorage.getItem("token"));
} catch (error) {
  initValue = null
}
//console.log(window.localStorage.getItem("token"),"red");
export  default function  reducer(preState=initValue,action) {
    let {type,data} = action
    switch (type) { 
        case LOGIN_TOKEN:
          
          return data

        default:
            return preState
    }
}
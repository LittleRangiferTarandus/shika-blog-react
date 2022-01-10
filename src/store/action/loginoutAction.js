import {LOGIN} from '../constant/loginoutConstant'
export const login = (data)=>{
  window.sessionStorage.setItem("userInfo",data)
  return{
    type:LOGIN,
    data
  }
}

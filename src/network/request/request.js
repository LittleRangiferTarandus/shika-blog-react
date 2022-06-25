import axios from 'axios';
import store from '../../store/store';
import { login } from '../../store/action/loginoutAction';
import { loginToken } from '../../store/action/tokenAction';
export const baseURL = "http://localhost:8099/";
export function request(config){
  const instance = axios.create({
    baseURL : baseURL,
    timeout : 5000,
    headers:{ 
    }
  })
//请求拦截
  instance.interceptors.request.use(
    config => {
      let token = window.localStorage.getItem('token')
      //console.log(token);
      if(token!==null&&token!==undefined&&token!=="undefined"){
        if(token.length>0){
          //console.log(token);
          config.headers.Authorization = token
          store.dispatch(loginToken(token))
        }
      }else{

      }
      //console.log(window.localStorage.getItem("token"),"req");
      //这里为请求头加入属性Authorization，值为token，对应后端请求数据的要求
      return config
    },err => {
      console.log(err);
    })
//响应拦截
  instance.interceptors.response.use(response => {
      let token = response.headers.authorization
      //console.log(token);
      if(token!==null&&token!==undefined&&token!=="undefined"){
        if(token.length>0){
          window.localStorage.setItem("token",response.headers.authorization)
          //console.log(window.localStorage.getItem("token"),"res");
        store.dispatch(loginToken(response.headers.authorization))
        }
      }
      return response.data
    },
    error=>{
      if(error?.response?.data?.status===500&&error?.response?.data?.message==='ExpiredCredentialsException'){
        store.dispatch(login(null))
        store.dispatch(loginToken(null))
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("userInfo")
      }
      if(error.response!==undefined&&error.response!==null)
        return error.response.data
      else
        return error.response
  })
  return instance(config)
}

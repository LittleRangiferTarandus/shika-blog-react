import {request} from '../request/request'
export function loginBlog(data){
  return request({
    method:"post",
    data,
    url:"/login"
  })
}

export function logoutBlog(){
  return request({
    url:"/logout"
  })
}
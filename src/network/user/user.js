import {request} from '../request/request'
export function getUser(id){
  return request({
    method:"get",
    url:"/user/"+(id+"")
  })
}

export function editUser(data){
  return request({
    method:"post",
    url:"/user/save",
    data:data
  })
}

import {request} from '../request/request'
export function getUser(id){
  return request({
    method:"get",
    url:"/user/"+(id+"")
  })
}
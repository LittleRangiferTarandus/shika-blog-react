import {request} from '../request/request'
export function getBlog(id){
  return request({
    method:"get",
    url:"/blog/"+(id+"")
  })
}
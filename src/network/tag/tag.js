import {request} from '../request/request'
export function getTag(id){
  return request({
    method:"get",
    url:"/tag-blog/tag/"+(id+"")
  })
}
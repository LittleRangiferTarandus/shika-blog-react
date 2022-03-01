import {request} from '../request/request'
export function getTag(id){
  return request({
    method:"get",
    url:"/tag-blog/tag/"+(id+"")
  })
}


export function getTags(type){
  return request({
    method:"get",
    url:"/tag/tags/"+(type+"")
  })
}

export function getTagsWithChildren(type){
  return request({
    method:"get",
    url:"/tag/tagsChildren/"+(type+"")
  })
}
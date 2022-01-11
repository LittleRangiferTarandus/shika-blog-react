import {request} from '../request/request'
export function getBlogs(currentPage,pageSize){
  return request({
    method:"get",
    url:"/blogs/"+(currentPage+"/")+(pageSize+"")
  })
}
export function getBlogUser(currentPage,pageSize){
  return request({
    method:"get",
    url:"/blogUser/"+(currentPage+"/")+(pageSize+"")
  })
}

export function getBlogUserTag(currentPage,pageSize,field){
  return request({
    method:"get",
    url:"/blogUserTag/"+field+"/"+(currentPage+"/")+(pageSize+"")
  })
}
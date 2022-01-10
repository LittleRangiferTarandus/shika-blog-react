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
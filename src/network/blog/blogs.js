import {request} from '../request/request'

export function getBlogsHome(pageSize){
  return request({
    method:"get",
    url:"/blogsHome/"+(pageSize+"")
  })
}




export function getBlogByUserPage(currentPage,userId,field){
  return request({
    method:"get",
    url:"/blogsPro/userPage/"+(userId+"/")+(currentPage+"/")+(field+"")
  })
}

export function getBlogsInCommonPage(currentPage,pageSize,field){
  return request({
    method:"get",
    url:"/blogsPro/commonPage/"+(currentPage+"/")+(pageSize+"/")+(field+"")
  })
}

export function getCountBlog(userId ){
  return request({
    method:"get",
    url:`/blog/count/${userId}`
  })
}
import {request} from '../request/request'
export function getComments(id,page){
  return request({
    method:"get",
    url:"/comment/byBlog/"+(id+"/")+(page+"")
  })
}

export function submitComments(blogId,content){
  return request({
    method:"post",
    url:"/comment/edit",
    data:{
      blogId,
      content
    }
  })
}
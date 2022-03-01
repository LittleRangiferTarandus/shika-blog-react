import {request} from '../request/request'
export function getBlog(id){
  return request({
    method:"get",
    url:"/blog/"+(id+"")
  })
}

export function deleteBlog(id){
  return request({
    method:"post",
    url:"/blog/delete/"+(id+"")
  })
}

export function edit(title,description,content,field,id,tags){
  return request({
    method:"post",
    url:"/blog/edit",
    data:{
      title,
      field,
      description,
      content,
      id,
      tags
    }
  })
}

export function getOneBlog(id){
  return request({
    method:"get",
    url:"/blogsPro/oneBlog/"+(id+"")
  })
}
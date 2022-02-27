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

export function edit(title,description,content,id){
  return request({
    method:"post",
    url:"/blog/edit",
    data:{
      title,
      description,
      content,
      id
    }
  })
}

export function getOneBlog(id){
  return request({
    method:"get",
    url:"/blogsPro/oneBlog/"+(id+"")
  })
}
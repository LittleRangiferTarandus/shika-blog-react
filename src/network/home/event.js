import {request} from '../request/request'
export function getEvent(date){
  return request({
    method:"get",
    url:"/info/event/"+date
  })
}
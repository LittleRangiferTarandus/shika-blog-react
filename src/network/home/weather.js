import {request} from '../request/request'
export function getWeather(){
  return request({
    method:"get",
    url:"/info/city"
  })
}
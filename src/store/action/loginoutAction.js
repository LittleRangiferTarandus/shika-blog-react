import {LOGIN,UPDATE_AVATAR} from '../constant/loginoutConstant'
export const login = (data)=>{
  return{
    type:LOGIN,
    data
  }
}

export const updateAvatar = (data)=>{
  return{
    type:UPDATE_AVATAR,
    data
  }
}

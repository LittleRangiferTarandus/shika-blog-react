import {LOGIN_TOKEN} from '../constant/tokenConstant'
export const loginToken = (data)=>{
  return{
    type:LOGIN_TOKEN,
    data
  }
}



import React from 'react'
import { Avatar } from 'antd';
import CSS from "./BlogAvatar.module.css"
import store from '../../../../store/store';
export default function BlogAvatar() {
  const loginRef = React.useRef()
  const showLogin=()=>{
    if(!store.getState())
      loginRef.current.setShow()
  }
  return (
    <div className={CSS.avatar}>
      <Avatar size={100}  icon={"🦌"}  onClick={()=>showLogin()}/>
      <h2 className={CSS.text} >{"小鹿小站"}</h2>

    </div>
  )
}

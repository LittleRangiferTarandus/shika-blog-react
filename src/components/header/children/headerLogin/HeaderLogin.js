import React, { useRef } from 'react'
import { Row ,Col,Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons'
import CSS from "./HeaderLogin.module.css"
import Logout from '../../../loginout/Logout'
import Login from '../../../loginout/Login'
import store from '../../../../store/store'
export default function HeaderLogin() {
  const loginRef = useRef()
  const logoutRef = useRef()
  
  const showLoginout=()=>{
    // console.log(store.getState());
    // console.log(window.localStorage.getItem("token"),"head");

    
    if(store.getState().token)
      logoutRef.current.setShow()
    else
      loginRef.current.setShow()
  }
  return (
    <div>    
      <Login ref={loginRef}></Login>
      <Logout ref={logoutRef}></Logout>

      <Row className={CSS.box}>
        <Col className={CSS.left} span={3}></Col>
        <Col className={CSS.else} span={7}>
          <Avatar className={CSS.avatar} size={25} 
            icon={store.getState()&&store.getState().userInfo?<img src={store.getState().userInfo.avatar } alt="头像"></img>:<UserOutlined />} />
        </Col>
        <Col className={CSS.else} span={7}>
          <h4 className={CSS.text} >{store.getState()&&store.getState().userInfo?store.getState().userInfo.username:"ヾ(•ω•`)o"}</h4>
        </Col>
        <Col className={CSS.else} span={7}>
        <p className={CSS.text} onClick={()=>showLoginout()}>登录/登出</p>
        </Col>
      </Row>
    </div>
  )
}

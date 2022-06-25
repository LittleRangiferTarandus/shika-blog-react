import React from 'react'
import { Menu } from "antd"
import CSS from "./HeaderMenu.module.css"
import { useNavigate } from "react-router";
import {BankTwoTone,ToolTwoTone,SmileTwoTone,EditTwoTone}from"@ant-design/icons"
import store from '../../../../store/store';
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
function HeaderMenu(props) {
  const navigate = useNavigate()
  const [selectKey,setSelectKye] = useState("1")
  const location = useLocation()
  useEffect(()=>{
    let key = location.pathname.split("/")[1]
    if(!key){
      setSelectKye("home")
    }else{
      setSelectKye(key)
    }
  },[location])
  return (
    <div>
      <Menu className={CSS.menu} theme="light" selectedKeys={[selectKey]} mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home" onClick={()=>{navigate("/home")}}>首页<BankTwoTone /></Menu.Item>
        <Menu.Item key="skill" onClick={()=>{navigate("/skill")}}>技术<ToolTwoTone /></Menu.Item>
        <Menu.Item key="mood" onClick={()=>{navigate("/mood")}}>随心贴<SmileTwoTone /></Menu.Item>
        <Menu.Item key="profile" onClick={()=>{navigate("/profile")}} style={{visibility:store.getState().token?"visible":"hidden"}}>我的<EditTwoTone /></Menu.Item>
        <Menu.Item key="editor" onClick={()=>{navigate("/editor")}} style={{visibility:store.getState().token?"visible":"hidden"}}>发帖/编辑<EditTwoTone /></Menu.Item>
      </Menu>
    </div>
  )
}
export default  (HeaderMenu)
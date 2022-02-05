import React from 'react'
import { Menu } from "antd"
import CSS from "./HeaderMenu.module.css"
import { useNavigate } from "react-router";
import {BankTwoTone,ContainerTwoTone,ToolTwoTone,SmileTwoTone,EditTwoTone}from"@ant-design/icons"
import store from '../../../../store/store';
function HeaderMenu(props) {
  const navigate = useNavigate()
  return (
    <div>
      <Menu className={CSS.menu} theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={()=>{navigate("/home")}}>首页<BankTwoTone /></Menu.Item>
        <Menu.Item key="2" onClick={()=>{navigate("/blogs")}}>博客<ContainerTwoTone /></Menu.Item>
        <Menu.Item key="3" onClick={()=>{navigate("/skill")}}>技术<ToolTwoTone /></Menu.Item>
        <Menu.Item key="4" onClick={()=>{navigate("/mood")}}>随心贴<SmileTwoTone /></Menu.Item>
        <Menu.Item key="5" onClick={()=>{navigate("/profile")}} style={{visibility:store.getState()?"visible":"hidden"}}>我的<EditTwoTone /></Menu.Item>
      </Menu>
    </div>
  )
}
export default  (HeaderMenu)
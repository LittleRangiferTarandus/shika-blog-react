import React from 'react'

import {Avatar, Tag } from "antd"
import { UserOutlined } from '@ant-design/icons'
import CSS from"./UserInfo.module.css"
export default function UserInfo(props) {
  const {username,avatar}=props
  return (
    <div className={CSS.box}>
      <Avatar size={64} 
            icon={avatar?<img src={avatar} alt='头像'></img>:<UserOutlined />} />
      <Tag className={CSS.tag}>{username}</Tag>
    </div>
  )
}

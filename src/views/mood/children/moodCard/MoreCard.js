import React from 'react'
import CSS from'./MoodCard.module.css'
import { Avatar, Card } from 'antd';
export default function MoreCard(props) {
  const {addClick,icon} = props
  const avarClick=()=>{
    addClick()
  }
  return (
      <Card className={CSS.morecard}>
        <div className={CSS.more}>
          <Avatar size={100} className={CSS.avar} icon={icon}  onClick={avarClick}/>
        </div>
      </Card>
  )
}

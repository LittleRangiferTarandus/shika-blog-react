import { Card, Tag } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CSS from'./MoodCard.module.css'
import{ClockCircleTwoTone} from"@ant-design/icons"
export default function MoodCard(props) {
  const {desc,title,pathname,state,link,time,tags}=props
  const navigate = useNavigate()
  return (
    <div className={CSS.box}>
      <Card className={CSS.card}>
        <h3 className={CSS.title} onClick={()=>link?navigate(pathname,state):""}>{title}</h3>
        <div className={CSS.descbox}>
          <p className={CSS.desc}>&emsp;&emsp;{desc}</p>
        </div>
        <Tag color="pink">随心贴</Tag>
        <Tag color="pink"><ClockCircleTwoTone/>{"  "+time}</Tag>
        {tags.map((value,index)=>{
          return(<Tag key={index}>{value.content}</Tag>)
        })}
      </Card>
    </div>
  )
}
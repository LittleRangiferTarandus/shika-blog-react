import { Card } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomeCard.css"
export default function HomeCard(props) {
  const {list,title,link}=props
  const navigate = useNavigate()
  return (
    <div className={CSS.box}>
      <Card   className='home-card'>
        <h3 className='home-card-title' onClick={()=>link?navigate(link.pathname,link.state):""}>{title}</h3>
        {list.map((value,index)=>{
          return <p key={index}>{value}</p>
        })}
      </Card>
    </div>
  )
}
                              
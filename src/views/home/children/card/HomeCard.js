import { Card } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomeCard.css"
export default function HomeCard(props) {
  const {list,title,link}=props
  const navigate = useNavigate()
  return (
    <Card  className='home-card-box' >
      <div className='home-card'>
        <h3 className='home-card-title' onClick={()=>link?navigate(link.pathname,link.state):""}>{title}</h3>
        {list.map((value,index)=>{
          return <p className='home-card-p' key={index}>{value}</p>
        })}
      </div>
    </Card>
  )
}
                              
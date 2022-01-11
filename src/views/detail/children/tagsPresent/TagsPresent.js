import { Tag } from 'antd'
import React from 'react'
import CSS from './TagsPresent.module.css'
export default function TagsPresent(props) {
  const {tags}=props
  
  return (
    <div className={CSS.box}>
      <h1>标签：</h1>
      {tags.map((value,index)=>{
        let color
        if (value.type==="field"){
          color="magenta"
        }else if(value.type==="language"){
          color="geekblue"
        }else if(value.type==="Module"){
          color="orange"
        }
        return(
          <Tag color={color} key={index}>{value.content}</Tag>
        ) 
      })}
    </div>
  )
}

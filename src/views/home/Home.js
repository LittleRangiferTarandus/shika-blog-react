import React, { useState } from 'react'
import HomeCard from './children/card/HomeCard'
import HistoryToday from './children/smallItem/HistoryToday';
import { getBlogs,getBlogsHome } from '../../network/blog/blogs';
import "./Home.css"
import ItemPic from './children/smallItem/ItemPic';

export default function Home() {
  const [listText, setlistText] = React.useState([])
  React.useEffect(()=>{
    let list=[]
    getBlogsHome(10).then(res=>{
      if(res.code===200){
        let temp = res.data
        temp.forEach((value,index)=>{
          list.push({
            title:value.title,
            desc:value.description,
            id:value.id
          })
        })
      }
      setlistText(list)
    })
  },[])
  return (

    <div className='home-out-box'>
      <div className='home-left-box'>
      <h1 className='home-title'>NEW!!</h1>
        {listText.map((value,index)=>{
          return <HomeCard key={index} title={value.title} list={[value.desc] }  link={{pathname:"/detail",state:{state:{id:value.id}}}}></HomeCard>
        })}
      </div>
      <div className='home-right-box'>
        <ItemPic></ItemPic>
        <HistoryToday></HistoryToday>
      </div>
    </div>
  )
}

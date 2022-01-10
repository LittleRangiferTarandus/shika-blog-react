import React from 'react'
import HomeCard from './children/card/HomeCard'
import HistoryToday from './children/card/HistoryToday';
import Weather from "./children/card/Weather"
import { getBlogs } from '../../network/blog/blogs';
import CSS from"./Home.module.css"

export default function Home() {
  const [listText, setlistText] = React.useState([])
  React.useEffect(()=>{
    let list=[]
    getBlogs(1,12).then(res=>{
      if(res.code===200){
        let temp = res.data.records
        temp.forEach((value)=>{
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
    <div className={CSS.box}>
      <HistoryToday></HistoryToday>
      <Weather></Weather>
      {listText.map((value,index)=>{
        return <HomeCard key={index} title={value.title} list={[value.desc] }  link={{pathname:"/detail",state:{state:{id:value.id}}}}></HomeCard>
      })}
    </div>
  )
}

import React from 'react'
import { getBlogUserTag } from '../../network/blog/blogs'
import MoodCard from './children/moodCard/MoodCard'
import MoreCard from './children/moodCard/MoreCard'
import CSS from'./Mood.module.css'
export default function Mood() {
  const [pageSize, setpageSize] = React.useState(10)
  const [mood, setmood] = React.useState([])
  const [icon, seticon] = React.useState("➕")
  React.useEffect(() => {
    seticon("🔄")
    getBlogUserTag(1,pageSize,'mood').then(res=>{
      if(res.code===200){
        setmood(res.data.records)
        seticon("➕")
      }
    })
  }, [pageSize])
  const setPage=()=>{setpageSize(pageSize+10)}
  return (
    <div className={CSS.outbox}>
      <h1 className={CSS.title}>贴上想贴的东西吧ο(=•ω＜=)ρ⌒☆</h1>
      <div className={CSS.box}>
        {mood.map((value,index)=>{
          if(value.tags[0]===null){
            value.tags=[]
          }else if(value.tags.length>3){
            value.tags=value.tags.slice(0,3)
            value.tags.push({content:"..."})
          }
          return(
          <MoodCard title={value.title} desc={value.description} 
            pathname={"/detail"} key={index} state={{state:{id:value.id}}} link={true}
            time={value.created.split("T").join(" ")} 
            tags={value.tags}
          ></MoodCard>)
        })}
        <MoreCard addClick={setPage} icon={icon}></MoreCard>
      </div>
    </div>
  )
}

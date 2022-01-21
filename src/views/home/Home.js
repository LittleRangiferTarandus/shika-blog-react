import React from 'react'
import HomeCard from './children/card/HomeCard'
import HistoryToday from './children/card/HistoryToday';
import { getBlogs } from '../../network/blog/blogs';
import "./Home.css"

export default function Home() {
  const [listText, setlistText] = React.useState([])
  React.useEffect(()=>{
    let list=[]
    getBlogs(1,5).then(res=>{
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
    <div>
      <div className="home-outbox">
        <div className="home-box">
        <img className="home-img" alt='background' src={require("../../common/img/home/home2.png")}></img>
        </div>
        <div className="home-front">
          <img className="home-img" alt='background' src={require("../../common/img/home/home.png")}></img>
        </div>
      </div>
      <div className='home-bottom-box'>
        <HistoryToday></HistoryToday>
        <h1 className='home-title'>最新博客：</h1>
        {listText.map((value,index)=>{
          return <HomeCard key={index} title={value.title} list={[value.desc] }  link={{pathname:"/detail",state:{state:{id:value.id}}}}></HomeCard>
        })}
      </div>
      
    </div>
  )
}

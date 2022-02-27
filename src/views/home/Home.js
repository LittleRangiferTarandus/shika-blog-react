import React from 'react'
import HomeCard from './children/card/HomeCard'
import HistoryToday from './children/smallItem/HistoryToday';
import { getBlogsHome } from '../../network/blog/blogs';
import "./Home.css"
import ItemPic from './children/smallItem/ItemPic';
import FloatButton from './children/floatButton/FloatButton';
import { BackTop } from 'antd';

export default function Home() {
  const [listText, setlistText] = React.useState([])
  const renewBlogs = () =>{
    let list=[]
    getBlogsHome(10).then(res=>{
      if(res?.code===200){
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
  }
  React.useEffect(()=>{
    renewBlogs()
  },[])

  
  return (
    <>
      <div className='home-out-box'>
        <div className='home-left-box'>
          <h1 className='home-title'>最新</h1>
          {listText.map((value,index)=>{
            return <HomeCard key={index} title={value.title} list={[value.desc] }  link={{pathname:"/detail",state:{state:{id:value.id}}}}></HomeCard>
          })}
        </div>
        <div className='home-right-box'>
          <ItemPic></ItemPic>
          <HistoryToday></HistoryToday>
        </div>
        
      </div>
      <BackTop></BackTop>
      <FloatButton renew={renewBlogs}></FloatButton>
    </>
  )
}

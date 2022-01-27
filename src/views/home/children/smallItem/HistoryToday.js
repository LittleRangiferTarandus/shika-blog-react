import React from 'react'
import { getEvent } from '../../../../network/home/event';
import formatDate from '../../../../common/js/fomatDate'
import SmallItem from './SmallItem';
import CSS from "./HistoryToday.module.css"
export default function HistoryToday() {
  const [listText, setListText] = React.useState([])
  React.useEffect(() => {
    const list = []
    getEvent(formatDate(new Date().toString().slice(0,16),"mmdd")).then(res=>{
      if(res.code===200){
        let temp = JSON.parse(res.data)
        for (let i = 0; i<4;i++){
          list.push(temp[i].title)
        }
      }
      setListText(list)
    })
  }, [])
  return (
    <SmallItem title="历史上的今天"> 
      <div style={{height:300,width:300}}>
        <p className={CSS.title} >历史上的今天</p>
        {
          listText.map((el,index)=>{
            return(
              <p key={index}>{el}</p>
            )
          })
        }
      </div>
    </SmallItem>
  )
}

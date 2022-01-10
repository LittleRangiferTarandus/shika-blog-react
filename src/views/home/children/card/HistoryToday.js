import React from 'react'
import { getEvent } from '../../../../network/home/event';
import formatDate from '../../../../common/js/fomatDate'
import HomeCard from './HomeCard';

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
    <div>
      <HomeCard list={listText} title="历史上的今天"></HomeCard>
    </div>
  )
}

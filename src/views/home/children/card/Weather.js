import React from 'react'
import { getWeather } from '../../../../network/home/weather';
import HomeCard from './HomeCard';

export default function HistoryToday() {
  const [listText, setListText] = React.useState([])
  React.useEffect(() => {
    const list = []
    getWeather().then(res=>{
      if(res.code===200){
        let temp = JSON.parse(res.data).lives[0]
        list.push(temp.province+"-"+temp.city)
        list.push("时间："+temp.reporttime)
        list.push("温度："+temp.temperature+" 湿度："+temp.windpower)
        list.push("天气："+temp.weather+" 风向："+temp.winddirection)
      }
      setListText(list)
    })
  }, [])
  
  return (
    <div>
      <HomeCard list={listText} title="今天天气"></HomeCard>
    </div>
  )
}

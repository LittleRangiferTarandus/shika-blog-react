import React, { useEffect, useState } from 'react';
import ReactEcharts from "echarts-for-react";
import {getDateOfMonth} from '../../../../common/js/getDateOfMonth'
import { getCountBlog } from '../../../../network/blog/blogs';
import store from '../../../../store/store';
import CSS from './Activate.module.css'
import {Divider} from 'antd';
const Activate = () => {
  const dates = getDateOfMonth()
  const dataMap = new Map()
  let currentYear = new Date().getFullYear()
  useEffect(()=>{
    
    if(store.getState()?.id!==undefined){
      getCountBlog(store.getState().id).then(res=>{
        if(res.code===200){
          const count = res.data
          count.forEach((v)=>{
            let tempDate=v.time.split("T")[0].slice(5)
            let tempYear =v.time.split("T")[0].slice(0,5)
            if(currentYear===tempYear){
              dataMap.set((tempDate,dataMap.get(tempDate)||0)+v.count)
            }
          })
          const value = new Array(dates.allDay.length).fill(0)
          dates.allDay.forEach((v,i)=>{
            if(dataMap.get(v)){
              value[i]=dataMap.get(v)
            }
          }) 
          setOption({
            xAxis: {
              type: 'category',
              data: dates.allDay
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: value,
                type: 'line'
              }
            ]
          })
        }
      })
    } 
  },[])
  const [option,setOption] = useState({
    xAxis: {
      type: 'category',
      data: dates.allDay
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: new Array(dates.allDay.length).fill(0),
        type: 'line'
      }
    ]
  });

  return (
    <>
      <Divider>博客活跃</Divider>
      <div className={CSS.wrapper}>
        <ReactEcharts option={option}></ReactEcharts>
      </div>
    </>
  );
};

export default Activate;
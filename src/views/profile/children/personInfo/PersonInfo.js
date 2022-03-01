import {Divider, Button } from 'antd';
import React, {  useEffect, useState } from 'react';
import { getUser } from '../../../../network/user/user';
import store from '../../../../store/store';
import {EditOutlined} from '@ant-design/icons'
import CSS from "./PersonInfo.module.css"
import InfoShow from '../infoShow/InfoShow';
import InfoEdit from '../infoEdit/InfoEdit';
function PersonInfo(props) {
  const [info,setinfo]=useState([])
  const [infoEdit,setinfoEdit]=useState({})
  const [isEdit,setisEdit] = useState(false)
  useEffect(()=>{
    if(isEdit) return
    let id = store.getState()?store.getState().id:undefined
    if(id===undefined||id===null) return
    getUser(id).then(res=>{
      if(res.code===200){
        const data=res.data
        setinfoEdit(data)
        const arr=[]
        for(let i of Object.keys(data)){
          if(i!=="id"&&i!=="avatar")
          arr.push({key:i,value:(data[i]+"")})
        }
        arr.sort()
        setinfo(arr)
      }
    })
  },[isEdit])
  const toEdit =()=>{
    setisEdit(true)
  }
  const fromEdit =()=>{
    setisEdit(false)
  }
  return (
    <div >
      <Divider>用户信息</Divider>

      <div className={CSS.box}>
        <div className={CSS.yesEdit}  style={{visibility:isEdit?"visible":"hidden",top:isEdit?0:-50}} >
          <InfoEdit fromEdit={fromEdit} info={infoEdit}></InfoEdit>
        </div>
        <div className={CSS.noEdit} style={{visibility:isEdit?"hidden":"visible",top:isEdit?-50:0}}>
          <InfoShow  info={info}></InfoShow>
          <Button  
          type="primary" danger size='small' block
          onClick={()=>toEdit()}>修改信息<EditOutlined /></Button>
        </div>
      </div>
      
      
    </div>
  );
}

export default PersonInfo;
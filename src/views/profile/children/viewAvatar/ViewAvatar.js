import { Avatar, Button } from 'antd';
import React, {  useState } from 'react';
import CSS from './ViewAvatar.module.css'
import store from '../../../../store/store';
import { UserOutlined } from '@ant-design/icons'
import UploadAvatar from '../uploadAvatar/UploadAvatar';
function ViewAvatar(props) {
  const [showUpload,setShowUpload] = useState(false)
  const showUploadChange = ()=>{
    setShowUpload(!showUpload)
  }
  return (
    <div className={CSS.title}>
      <Avatar className={CSS.avatar} size={100} 
          icon={store.getState()&&store.getState().avatar?<img src={store.getState().avatar } alt="头像"></img>:<UserOutlined />} 
      />
      
      <div className={CSS.upload} style={{visibility:showUpload?'visible':"hidden"}}>
        <UploadAvatar></UploadAvatar>
      </div>
      <div onClick={showUploadChange} className={CSS.showButton}
        style={{
          left:showUpload?"0px":"-100px"
        }}>
        <Button size='small' >{showUpload?"修改完成":"修改头像"}</Button>
      </div>
    </div>
  );
}

export default ViewAvatar;
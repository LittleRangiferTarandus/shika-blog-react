import { Avatar } from 'antd';
import React from 'react';
import CSS from './ViewAvatar.module.css'
import store from '../../../../store/store';
import { UserOutlined } from '@ant-design/icons'
function ViewAvatar(props) {
  return (
    <div className={CSS.title}>
      <div className={CSS.titleLine}></div>
      <Avatar className={CSS.avatar} size={100} 
          icon={store.getState()&&store.getState().avatar?<img src={store.getState().avatar } alt="头像"></img>:<UserOutlined />} 
      />
    </div>
  );
}

export default ViewAvatar;
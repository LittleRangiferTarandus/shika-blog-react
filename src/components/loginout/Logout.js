import React from 'react'
import { Modal } from 'antd';
import {logoutBlog} from '../../network/loginout/loginout' 
import  store  from '../../store/store';
import { login } from '../../store/action/loginoutAction';
function Logout(props,ref) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const setShow = ()=>{setVisible(!visible)}
  React.useImperativeHandle(ref, () => ({
    setShow
  }));

  const handleOk = () => {
    setConfirmLoading(true)
    logoutBlog().then(res=>{
      if(res.code===200){
        store.dispatch(login(null))
        setConfirmLoading(false)
        setVisible(false)
        window.localStorage.setItem("token","undefined")
      }else{
        setConfirmLoading(false)

      }
    })
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div >
      <Modal
        
        title="Logout"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <h2>要退出登录吗</h2>
      </Modal>
    </div>
  );
}

export default React.forwardRef(Logout);
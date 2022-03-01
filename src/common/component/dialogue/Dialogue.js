import React from 'react'
import { Modal } from 'antd';
function Dialogue(props,ref) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const setShow = ()=>{
    setVisible(data=>{
      return !data
    })}

  const setLoading = ()=>{
    setConfirmLoading(data=>{
      return !data
    })
  }
  React.useImperativeHandle(ref, () => ({
    setShow,setLoading
  }));
  const handleOk = ()=>{
    props.handleOk()
  }
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div >
      <Modal
        
        title={props.title}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <h6>{props.content}</h6>
      </Modal>
    </div>
  );
}

export default React.forwardRef(Dialogue);
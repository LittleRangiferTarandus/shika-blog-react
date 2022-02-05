import { Form ,Input,Button} from 'antd';
import React, { createRef, useEffect } from 'react';
import { editUser } from '../../../../network/user/user';
import CSS from './InfoEdit.module.css'
function InfoEdit(props) {
  const ref = createRef()
  useEffect(()=>{
    ref.current.setFieldsValue({
      email:props.info.email,
      nickname:props.info.nickname
    })
  },[props.info,ref])
  const submit = ()=> {
    let data = JSON.parse(JSON.stringify(props.info))
    let newData = ref.current.getFieldsValue()
    data.nickname=newData.nickname
    data.email=newData.email
    editUser(data).then(res=>{
      if(res.data){
        props.fromEdit()
      }
    })
  }
  return (
    <div className={CSS.box}>
      <Form 
        ref={ref}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={()=>{}}
        onFinishFailed={()=>{}}
        autoComplete="off"
      >
        <Form.Item
          label="昵称"
          name="nickname"
          rules={[{ required: true, message: '请输入昵称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={
            [
              { required: true, message: '请输入邮箱' },
              {
                type: 'email',
                message: '邮箱格式错误',
              }
            ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={()=>submit()}>
            提交修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default InfoEdit;
import React from 'react'
import { Modal } from 'antd';
import { Form, Input} from 'antd';
import {loginBlog} from '../../network/loginout/loginout' 
import  store  from '../../store/store';
import { login } from '../../store/action/loginoutAction';
function Loginout(props,ref) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const setShow = ()=>{setVisible(!visible)}
  const [form] = Form.useForm()
  React.useImperativeHandle(ref, () => ({
    setShow
  }));

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleOk = () => {
    setConfirmLoading(true)
    let data=form.getFieldValue();
    loginBlog({
      username:data.username,
      password:data.password-0
    }).then(res=>{
      if(res.code===200){
        store.dispatch(login(res.data))
        setConfirmLoading(false)
        setVisible(false)
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
        
        title="Login"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          className={CSS.form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Username" name="username"
            rules={[{
                required: true,
                message: 'Please input your username!',
              }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password"
            rules={[{
                required: true,
                message: 'Please input your password!',
              },]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default React.forwardRef(Loginout);
import React, { useState } from 'react';
import MdEditor from 'md-editor-rt';
import { Form ,Input,Button} from 'antd';
import CSS from './Editor.module.css'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import {getOneBlog,edit}  from '../../network/blog/blog'

function Editor(props) {
  const [form] = Form.useForm()
  const [text, setText] = useState('hello md-editor-rt！');
  const location = useLocation()
  const [id,setId] = useState()
  const navigate = useNavigate()

  const onReset = () => {
    form.resetFields()
    setText("")
  }

  useEffect(()=>{
    setId(location.state?.blogId)
  },[location.state])
  useEffect(()=>{
    getOneBlog(id).then(res=>{
      if(res?.code===200){
        let data = res.data
        form.setFieldsValue({
          title:data.title,
          description:data.description,
        })
        setText ( data.content )
      }
    })
  },[id])// eslint-disable-line react-hooks/exhaustive-deps
  const onFinish = () => {
    let submitForm = form.getFieldValue() 
    edit(submitForm.title,submitForm.description,text,id).then(res=>{
      if(res?.code===200){
        navigate("/profile")
      }
    })
  }

  return (
    <div>

      <Form form={form} onFinish ={onFinish }>
        <Form.Item className={CSS.inputs}
          label="标题"
          name="title"
          rules={[{ required: true, message: '请输入标题' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item className={CSS.inputs}
          label="描述"
          name="description"
          rules={[{ required: true, message: '请输入描述' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item className={CSS.inputs}>
          <MdEditor   modelValue={text} onChange={setText}></MdEditor>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={CSS.bottomButton}>
            完成
          </Button>
          <Button htmlType="button" onClick={onReset} className={CSS.bottomButton}>
            重置
          </Button>
        </Form.Item>
      </Form>
      
    </div>
  );
}

export default Editor;
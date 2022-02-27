import React from 'react';
import {Button, List, Menu, Pagination, Tag,Divider} from 'antd'
import CSS from './MyBlogs.module.css'
import { useEffect } from 'react';
import {getBlogByUserPage} from '../../../../network/blog/blogs'
import store from '../../../../store/store';
import { useState } from 'react';
import{ClockCircleTwoTone} from"@ant-design/icons"
import { createRef } from 'react';
import DeleteBlog from '../deleteBlog/DeleteBlog';
import { useNavigate } from 'react-router-dom';
function MyBlogs(props) {
  const[data,setdata]=useState([])
  const [page,setpage] = useState([1])
  const [total,settotal] = useState([50])
  const [field,setfield] = useState("all")
  const ref = createRef()
  const navigate = useNavigate()

  const getData = (page,field)=>{
    getBlogByUserPage(page,store.getState()?store.getState().id:undefined,field).then(res=>{
      if(res.code===200){
        setdata(res.data.records)
        settotal(res.data.total)
      }
    })
  }
  useEffect(()=>{
    getData(page,field)
  },[page,field])

  const [blogId,setblogId] = useState()
  const menuClick=e=>{
    setpage(1)
    setfield(e.key)
  }

  const pageChange=page=>{
    setpage(page)
  }

  const deleteClick = (id) => {
    setblogId(id)
    ref.current.setShow()
  }

  const editClick=(id)=>{
    navigate("/editor",{state:{blogId:id}})
  }

  return (
    <div className={CSS.outer}>
      <Divider >我的博客</Divider>
      <Menu mode="horizontal" defaultSelectedKeys={["all"]} onClick={menuClick}>
        <Menu.Item key="all" >全部博客</Menu.Item>
        <Menu.Item key="skill" >技术博客</Menu.Item>
        <Menu.Item key="mood" >随心贴</Menu.Item>
      </Menu>
      <List
        className={CSS.box}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <>
            <List.Item
              actions={
                [<Button type="primary" onClick={()=>editClick(item?.id)}>编辑博客</Button>,
                <Button danger onClick={()=>deleteClick(item?.id)}>删除博客</Button>]}
            >
              <List.Item.Meta
                title={item?.title}
                description={item?.description}
              />
              
            </List.Item>
            <Tag><ClockCircleTwoTone/>{item?.created.split("T").join(" ")}</Tag>
            <Tag>{item?.field==="mood"?"随心贴":"技术博客"}</Tag>
            {
              item?.tags.length>0?item.tags.map((el,index)=>{
                if(el) return <Tag key={index}>{el.content}</Tag>
                else return ""
              }):[]
            }
          </>
        )}
      />
      <Pagination className={CSS.page}  current={page} defaultCurrent={1}  total={total} onChange={pageChange} />
      <DeleteBlog getData = {()=>getData(page,field)} ref={ref} blogId={blogId}></DeleteBlog>
    </div>
  )
}

export default MyBlogs;
import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getComments,submitComments } from '../../../../network/comment/comment'
import CSS from './Comment.module.css'
import { Avatar,message } from 'antd';
import { UserOutlined,EditOutlined } from '@ant-design/icons'
import { Pagination,Input,Button } from 'antd';
import store from '../../../../store/store'
Comment.propTypes = {
  blogId:PropTypes.number
};

function Comment(props) {
  const [comments,setComments] = React.useState([])
  const [page,setPage]= React.useState(0)
  const [total,setTotal]= React.useState(50)
  const updateComment = ()=>{
    if(props.blogId===undefined){
      return
    }
    getComments(props.blogId,page).then(res=>{
      let temp = res.data.records
      setTotal(res.data.total)
      temp.forEach(v=>{
        v.created=v.created.split("T").join(" ")
      })
      setComments(temp)
    })
  }
  useEffect(()=>{
    updateComment()
  },[page,props.blogId])// eslint-disable-line react-hooks/exhaustive-deps

  const onChange = (page)=>{
    setPage(page)
  }
  
  const inputRef = createRef()
  const submit = ()=>{
    let userInfo = store.getState()
    if(!userInfo){
      message.info("请先登录")
      return
    }
    let content = inputRef.current.input.value
    if(!content.length){
      message.info("不能提交空评论哦")
      return
    }
    if(content.length>300){
      message.info("超过字数限制（≤300）")
      return
    }
    submitComments(props.blogId,content).then(res=>{
      if(res.code===200){
        message.info("提交成功")
        updateComment()
      }
    })
  }

  return (
    <>
      <div className={CSS.comments}>
       
      {
        comments.length?comments?.map((v,i)=>{
          return(
            <div className={CSS.commentItem} key={v.id+"-"+i}>
              <div className={CSS.commentHead}>
                <Avatar icon={v.avatar?<img src={v.avatar } alt="头像"></img>:<UserOutlined />}></Avatar>
                <div>{v.nickname}</div>
              </div>
              <div className={CSS.commentContent}>{v.content}</div>
              <div className={CSS.commentTime} >{v.created}</div>
            </div>
          )
        }):"暂时没有评论哦"
      }
      </div>
      <Pagination className={CSS.pagination} onChange={onChange} defaultCurrent={1} total={total} defaultPageSize={15} />
      <Input.Group>
        <Input prefix={<EditOutlined />} className={CSS.input} placeholder="期待你的评论" ref={inputRef}/><Button type="primary" onClick={submit}>评论</Button>
      </Input.Group>
    </>
  );
}

export default Comment;
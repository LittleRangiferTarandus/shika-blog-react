import React from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { createRef } from 'react';
import Dialogue from '../../../../components/dialogue/Dialogue';
import{deleteBlog} from '../../../../network/blog/blog'
function DeleteBlog(props,ref) {
  const refDialog = createRef()
  useImperativeHandle(ref,()=>({
    setShow:refDialog.current.setShow
  }))
  const handleOk = () => {
    refDialog.current.setLoading()
    deleteBlog(props.blogId).then(res=>{
      if(res.code===200){
        refDialog.current.setShow()
        props.getData()
      }
      refDialog.current.setLoading()
    })
  }
  return (
    <Dialogue title="Delete" content="确定要删除博客吗？" ref={refDialog} handleOk={handleOk} ></Dialogue>
  );
}

export default forwardRef(DeleteBlog);
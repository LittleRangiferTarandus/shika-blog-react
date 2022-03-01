import { Tag } from 'antd';
import React, { useImperativeHandle } from 'react';
import { forwardRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTags,getTagsWithChildren } from '../../../../network/tag/tag';
import CSS from "./TagGroup.module.css"
function TagGroup(props,ref) {
  const [tags,setTags]=useState([])

  const [tagSet] = useState(new Set())

  const [preField,setPreField] = useState("")
  
  const [lang,setLang] = useState([])
  const [field,setField] =useState([])

  const [tagAddShow,setTagAddShow]=useState(false)

  const [childrenShow,setChildrenShow]=useState(false)
  const [childrenTag,setChildrenTag]=useState([])
  const [childrenParent,setChildrenParent] = useState()

  useImperativeHandle(ref,()=>({
    getTagList : ()=>[...tagSet]
  }))
  useEffect(()=>{
    if(props.tags&&props.tags[0])
      setTags(props.tags)
  },[props.tags])
  

  useEffect(()=>{
    const addColor = (fieldTagsData,langTagsData)=>{
      tags.forEach((v)=>{
        tagSet.add(v.id)
      })
      fieldTagsData?.forEach((v)=>{
        if(tagSet.has(v.id)){
          v.isExist = true
        }
        if(v.children?.length){
          v.children.forEach((v)=>{
            if(tagSet.has(v.id)){
              v.isExist = true
            }
          })
        }
      })
      langTagsData?.forEach((v)=>{
        if(tagSet.has(v.id)){
          v.isExist = true
        }
      })
    }
     
    if(props.field!==preField&&preField!==""){
      setField([])
      setLang([])
      setChildrenTag([])
      setChildrenShow(false)
      tagSet.clear()
      setTags([])
    }
    if(props.field==="mood"){
      setChildrenTag([])
      setChildrenShow(false)
      setField([])
    }
    setPreField(props.field)
    if(props.field==="skill"){
      Promise.all([getTagsWithChildren("field"),getTags("language")]).then(res=>{
        let [fieldTags,langTags] = res
        if(fieldTags?.code===200&&langTags?.code===200){
          addColor(fieldTags.data,langTags.data)
          setField(fieldTags.data)
          setLang(langTags.data)
        }
      })
    }else if(props.field==="mood"){
      
      getTags("mood").then(res=>{
        if(res?.code===200){
          addColor(res.data)
          setLang(res.data)
        }
      })
    }

  },[tagSet,tags,props.field])// eslint-disable-line react-hooks/exhaustive-deps


  const addTag = (tag) => {
    if(!tagSet.has(tag.id)){
      tagSet.add(tag.id)
      setTags([...tags,tag])
      tag.isExist=true
    }
  }


  const closeClick = (tag)=>{
    let id = tag.id
    if(id===undefined) return
    tagSet.delete(id)

    lang.forEach(v=>{
      if(v.id===id) {
        v.isExist=false
      }
    })
    field.forEach(v=>{
      if(v.id===id){
        v.isExist=false
        if(v.children?.length){
          v.children.forEach(v=>{
            tagSet.delete(v.id)
            v.isExist=false
          })
        }
        if(childrenParent===id){
          childrenTag.forEach(v=>{
            v.isExist=false
          })
        }
      }else if(v.children?.length){
        v.children.forEach(v=>{
          if(v.id===id){
            v.isExist=false
          }
        })
      }
    })

    let newTags = tags.filter((v)=>tagSet.has(v.id))
    setTags(newTags)

    childrenTag.forEach(v=>{
      if(v.id===id) {
        v.isExist=false
      }
    })
  }
  
  const addClick = () =>{
    setTagAddShow(!tagAddShow)
    setChildrenShow(false)
  }

  const addFieldTag = (tag) => {
    if(!tagSet.has(tag.id)){
      tagSet.add(tag.id)
      setTags([...tags,tag])
      tag.isExist=true
    }
    let children
    for(let i=0;i<field.length;i++){
      if(field[i].id===tag.id){
        children=field[i].children
        break
      }
    }
    setChildrenTag(children)
    setChildrenParent(tag.id)
    setChildrenShow(true)
  }

  const addChildrenTag = (tag) =>{
    if(!tagSet.has(tag.id)){
      tagSet.add(tag.id)
      setTags([...tags,tag])
      tag.isExist=true

      for(let i=0;i<field.length;i++){
        if(field[i].id===childrenParent){
          if(field[i]?.children?.length){
            for(let j=0;j<field[i].children.length;j++){
              if(field[i].children[j].id===tag.id){
                field[i].children[j].isExist=true
                break
              }
            }
            break
          }
        }
      }
    }
  }
  return (
    <div className={CSS.inputs} style={{height:tagAddShow?"130px":"45px"}}>
      <span>博客标签：</span>
      {
        tags.length&&tags[0]!==null?tags.map((v,i)=>{
          return <Tag closable color="pink" onClose={()=>closeClick(v)} key={v.content+i}>{v?.content}</Tag>
        }):''
      }
      <Tag onClick = {addClick}>{tagAddShow?"-添加完成":"+添加标签"}</Tag>
      <div  style={{height:tagAddShow?"100px":"0"} }className={[CSS.tagAdd,CSS.tagDiv].join(" ")}>
        <div>
          <span>{props.field==="skill"?"语言":props.field==="mood"?"标签":""}：</span>
          {
            lang?.map((v,i)=>{
              return <Tag key={v.content+i} color={v.isExist?"orange":"blue"} onClick={()=>{addTag(v)}}>{v.content}</Tag>
            })
          }
        </div>
        <div className={CSS.tagDiv}>
          <span>{props.field==="skill"?"领域：":""}</span>
          {
            field?.map((v,i)=>{
              return (
                <Tag key={v.content+i} color={v.isExist?"orange":"blue"} onClick={()=>{addFieldTag(v) ;} }>{v.content}</Tag>
              )
            })
          }
        </div>
        <div className={[CSS.tagChildren,CSS.tagDiv].join(" ")} style={{height:childrenShow?"50px":"0"} }>
          <span>框架：</span>
          {
            childrenTag&&childrenTag.length?childrenTag.map((v,i)=>{
              return (
                <Tag key={v.content+i} color={v.isExist?"orange":"blue"} onClick={()=>{addChildrenTag(v) ;} }>{v.content}</Tag>
              )
            }):<Tag color={"green"}>这个分类下暂时还没有标签哦</Tag>
          }
        </div>
      </div>
    </div>
  );
}

export default forwardRef(TagGroup);
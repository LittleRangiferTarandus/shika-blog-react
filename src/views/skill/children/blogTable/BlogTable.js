import React from 'react'
import { Table, Tag } from 'antd';
import { getBlogUserTag } from '../../../../network/blog/blogs';
import { useNavigate } from 'react-router-dom';
import CSS from"./BlogTable.module.css"


export default function BlogTable() {
  const navigete = useNavigate()
  const columns = [
    { title: '标题', dataIndex: 'title', key: 'title' ,render: title=>{
      return(
        <span className={CSS.title}  onClick={()=>navigete("/detail",{state:{id:title.id}})}>
          {title.title}
        </span>
      )
    }},
    { title: '发布者', dataIndex: 'author', key: 'author' },
    { title: '发帖日期', dataIndex: 'publishDate', key: 'publishDate' },
    { title: '标签' ,dataIndex:'tag',key:'tag',width: 300, render: tag => {
      const tagList=[]
      if(tag[0]){
        tag.forEach((value,index)=>{
          let color
          if (value.type==="field"){
            color="magenta"
          }else if(value.type==="language"){
            color="geekblue"
          }else if(value.type==="Module"){
            color="orange"
          }
          tagList.push(<Tag color={color} key={index}>{value.content}</Tag>)
        })
      }
      return tagList
    }},
  ];
  const [blogs, setblogs] = React.useState([])
  const [pagination, setpagination] = React.useState({
    current: 1,
    pageSize: 10,
    total:10,
  })
  const getPage=(current,size,isFirst=false)=>{
    getBlogUserTag(current,size,"skill").then(res=>{
      if(res.code===200){
        let temp = res.data
        let tempList = []
        temp.records.forEach((value,index)=>{
          
          tempList.push({
            key:index,
            title:{title:value.title,id:value.id},
            publishDate:value.created.split("T").join(" "),
            author:value.username,
            description:value.description,
            tag:value.tags
          })
        })
        setblogs(tempList)
        if(isFirst){
          setpagination({
            total:temp.total,
            current:pagination.current,
            pageSize:pagination.pageSize
          })
        }
      }
    })
  }
  React.useEffect(() => {  
    getPage(1,10,true)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  React.useEffect(() => {  
    getPage(pagination.current,pagination.pageSize)
  }, [pagination])// eslint-disable-line react-hooks/exhaustive-deps
  const onChange=(pagination)=>{
    setpagination(pagination)
  }
  return (
    <div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
          rowExpandable: () => true,
        }}
        rowClassName={(record,index)=>index%2===0?CSS.ou:CSS.ji}
        pagination={pagination}
        dataSource={blogs}
        onChange={onChange}
      />
    </div>
  )
}

import React from 'react'
import CSS from "./Article.module.css"

import ReactMarkdown from 'react-markdown'
import { Tag } from 'antd'
export default function Article(props) {
  const {blog} = props
  return (
    <div className={CSS.box}>
      <h1 className={CSS.title}>{blog.title}</h1>
      <div className={CSS.created}>
        <p className={CSS.date}>创建时间：{blog.created}</p>
        <Tag>{blog.username}</Tag>
      </div>
      <p className={CSS.desc}>{blog.description}</p>
      <ReactMarkdown children={blog.content} />
    </div>
  )
}

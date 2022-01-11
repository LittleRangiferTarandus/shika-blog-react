import React from 'react'
import BlogTable from './children/blogTable/BlogTable'
import CSS from './Skill.module.css'
export default function Skill() {
  return (
    <div className={CSS.box}>
      <img alt='技术博客' src={require("../../common/img/skill.png")}></img>
      <BlogTable></BlogTable>
    </div>
  )
}

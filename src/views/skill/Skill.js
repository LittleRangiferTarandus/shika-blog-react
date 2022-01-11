import React from 'react'
import BlogTable from './children/blogTable/BlogTable'
import './Skill.css'
export default function Skill() {
  return (
    <div className='skill-box'  >
      <img alt='技术博客' src={require("../../common/img/skill/skill.png")}></img>
      <img alt='技术博客' className='skill-gear' src={require("../../common/img/skill/gear.png")}></img>
      <BlogTable></BlogTable>
    </div>
  )
}

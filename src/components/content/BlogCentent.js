import React from 'react'
import{Routes,Route} from "react-router"
import Home from '../../views/home/Home'
import CSS from "./BlogCentent.module.css"
import Blogs from '../../views/blogs/Blogs';
import Detail from '../../views/detail/Detail';
import Skill from '../../views/skill/Skill';
import Mood from '../../views/mood/Mood';
import Profile from '../../views/profile/Profile';
export default function BlogCentent() {
  return (
    <div className={CSS.content}>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path="/skill" element={<Skill></Skill>}></Route>
        <Route path="/mood" element={<Mood></Mood>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  )
}

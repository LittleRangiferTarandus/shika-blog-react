import React from 'react'
import{Routes,Route} from "react-router"
import Home from '../../views/home/Home'
import CSS from "./BlogCentent.module.css"
import Blogs from '../../views/blogs/Blogs';
import Detail from '../../views/detail/Detail';
export default function BlogCentent() {
  return (
    <div className={CSS.content}>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  )
}

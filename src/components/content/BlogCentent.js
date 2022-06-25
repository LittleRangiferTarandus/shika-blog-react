import React, { lazy, Suspense } from 'react'
import{Routes,Route,Navigate} from "react-router"
import CSS from "./BlogCentent.module.css"

import store from "../../store/store"

const Home = lazy(()=>import('../../views/home/Home'))
const Detail = lazy(()=>import('../../views/detail/Detail'))
const Skill = lazy(()=>import('../../views/skill/Skill'))
const Mood = lazy(()=>import('../../views/mood/Mood'))
const Profile = lazy(()=>import('../../views/profile/Profile'))
const Editor = lazy(()=>import('../../views/editor/Editor'))

export default function BlogCentent() {
  
  return (
    <div className={CSS.content}>
        <Suspense fallback ={<div>time out</div>}>
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/detail" element={<Detail/>}></Route>
            <Route path="/skill" element={<Skill/>}></Route>
            <Route path="/mood" element={<Mood/>}></Route>
            {
              store.getState().token == true?
              <Route path="/profile" element={<Profile/>}></Route>:""
            }
            {
              store.getState().token == true?
              <Route path="/editor" element={<Editor/>}></Route>:""
            }
            
            
            <Route path="*" element={<Navigate from="/*" to="/"></Navigate>}></Route>
            
          </Routes>
        </Suspense >
    </div>
  )
}

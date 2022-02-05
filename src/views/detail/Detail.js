import React from 'react'
import { useLocation } from 'react-router-dom'
import { getBlog } from '../../network/blog/blog'
import { getTag } from '../../network/tag/tag'
import { getUser } from '../../network/user/user'
import Article from './children/article/Article'
import TagsPresent from './children/tagsPresent/TagsPresent'
import UserInfo from './children/userInfo/UserInfo'
import CSS from "./Detail.module.css"
export default function Detail(props) {
  const [blog, setblog] = React.useState({})
  const [user, setuser] = React.useState({})
  const [tags, settags] = React.useState([])
  const location = useLocation()
  React.useEffect(() => {
    getBlog(location.state.id).then(res=>{
      if(res.code===200){
        const temp=res.data
        temp.created=temp.created.split("T").join(" ")
        getUser(temp.userId).then(res=>{
          if(res.code===200){
            setuser(res.data)
            temp.username = res.data.nickname
            setblog(temp)
          }
        })
        getTag(temp.id).then(res=>{
          if(res.code===200){
            if(res.data&&res.data[0]){
              settags(res.data)
            }else{
              settags([{
                content:'等待博主加入标签',
                type:'field'
              }])
            }
          }
        })
      }
    })
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={CSS.box}>
      <div className={CSS.left}>
        <Article blog={blog}></Article>
        <UserInfo avatar={user.avatar} username={user.nickname}></UserInfo>
      </div>
      <div>
        <TagsPresent tags={tags}></TagsPresent>
      </div>
    </div>
  )
}

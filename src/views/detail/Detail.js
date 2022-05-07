import React from 'react'
import { useLocation } from 'react-router-dom'
import { getOneBlog } from '../../network/blog/blog'

import Article from './children/article/Article'
import Comment from './children/comment/Comment'
import TagsPresent from './children/tagsPresent/TagsPresent'
import UserInfo from './children/userInfo/UserInfo'
import CSS from "./Detail.module.css"
export default function Detail(props) {
  const [blog, setblog] = React.useState({})
  const [user, setuser] = React.useState({})
  const [tags, settags] = React.useState([])

  const location = useLocation()
  React.useEffect(() => {
    getOneBlog(location.state.id).then(res=>{
      if(res?.code===200){
        const temp=res.data
        temp.created=temp.created.split("T").join(" ")

        let user = {}
        user.nickname = temp.nickname
        user.avatar = temp.avatar
        setuser(user)
        
        let blog = {}
        blog.id=temp.id
        blog.created = temp.created
        blog.title = temp.title
        blog.description = temp.description
        blog.username = temp.username
        blog.content = temp.content

        setblog(blog)


        if(temp.tags&&temp.tags[0]){
          settags(temp.tags)
        }else{
          settags([{
            content:'等待博主加入标签',
            type:'field'
          }])
        }

        
      }
    })
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className={CSS.box}>
      <div className={CSS.left}>
        <Article blog={blog}></Article>
        <UserInfo avatar={user.avatar} username={user.nickname}></UserInfo>
        <Comment blogId={blog.id}></Comment>
      </div>
      <div>
        <TagsPresent tags={tags}></TagsPresent>
      </div>
    </div>
  )
}

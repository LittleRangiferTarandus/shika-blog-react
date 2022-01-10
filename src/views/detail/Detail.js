import React from 'react'
import { useLocation } from 'react-router-dom'
import { getBlog } from '../../network/blog/blog'
import { getUser } from '../../network/user/user'
import Article from './children/article/Article'
import UserInfo from './children/userInfo/UserInfo'
export default function Detail(props) {
  const [blog, setblog] = React.useState({})
  const [user, setuser] = React.useState({})
  const location = useLocation()
  React.useEffect(() => {
    getBlog(location.state.id).then(res=>{
      if(res.code===200){
        const temp=res.data
        temp.created=temp.created.split("T").join(" ")
        getUser(temp.userId).then(res=>{
          if(res.code===200){
            setuser(res.data)
            temp.username = res.data.username
            setblog(temp)
          }
        })
      }
    })
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <Article blog={blog}></Article>
      <UserInfo avatar={user.avatar} username={user.username}></UserInfo>
    </div>
  )
}

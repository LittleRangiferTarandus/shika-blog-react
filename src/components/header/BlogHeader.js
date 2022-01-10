import BlogHeaderBackground from "./children/blogHeaderBackground/BlogHeaderBackground"
import HeaderMenu from "./children/headerMenu/HeaderMenu"
import CSS from "./BlogHeader.module.css"
import HeaderLogin from "./children/headerLogin/HeaderLogin"
function BlogHeader(){
  return(
    <div className={CSS.div}>
      <BlogHeaderBackground></BlogHeaderBackground>
      <HeaderMenu ></HeaderMenu>
      <HeaderLogin></HeaderLogin>
    </div>
  )
}
export default BlogHeader
import CSS from "./BlogHeaderBackground.module.css"
const pic = require("../../../../common/img/default.jpg")
function BlogHeaderBackground(){
  return(
    <>
      <img className={CSS.img} alt="background" src={pic}></img>
    </>
  )
}
export default BlogHeaderBackground
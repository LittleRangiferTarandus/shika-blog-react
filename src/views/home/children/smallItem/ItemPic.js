import SmallItem from "./SmallItem"
import CSS from "./ItemPic.module.css"

function ItemPic(props){
  return(
    <SmallItem>
      <div className={CSS.outbox}>
        <div className={CSS.front}>
        <img className={CSS.img} alt='background' src={require("../../../../common/img/home/home2.png")}></img>
        </div>
        <div className={CSS.back}>
          <img className={CSS.img} alt='background' src={require("../../../../common/img/home/home.png")}></img>
        </div>
      </div>
    </SmallItem>
  )
}
export default ItemPic
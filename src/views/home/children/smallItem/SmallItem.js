import { Card } from "antd"
import CSS from "./SmallItem.module.css"

function SmallItem(props){
  return(
    <Card className={CSS.smallItem}  >
      {props.children}
    </Card>
  )
}
export default SmallItem
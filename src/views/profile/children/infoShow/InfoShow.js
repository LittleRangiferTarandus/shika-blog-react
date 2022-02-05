import React from 'react';
import { Row, Col} from 'antd';
import CSS from './InfoShow.module.css'
function InfoShow(props) {
  return (
    <div className={CSS.infoBox}>
      {props.info.map((el,index)=>{
        return (
          <Row className={CSS.row} key={index}>
            <Col className={CSS.key} span={4}>{el.key}</Col>
            <Col className={CSS.value} span={8}>{el.value}</Col>
          </Row>
        )
      })}
    </div>
  );
}

export default InfoShow;
import { BackTop } from 'antd';
import React from 'react';
import CSS from './FloatButton.module.css'
function FloatButton(props) {
  return (
    <div>
      <BackTop onClick={props.renew} className={CSS.new}>更多<br></br> F 5 </BackTop>
    </div>
  );
}

export default FloatButton;
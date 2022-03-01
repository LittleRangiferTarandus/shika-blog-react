import { Radio } from 'antd';
import React from 'react';
import { useEffect } from 'react';

function FieldRadio(props) {
  const onChange = (e) =>{
    props.onChange(e.target.value)
  }
  useEffect(()=>{
    props.onChange(props.current)
  },[props.current])
  return (
    <Radio.Group onChange={onChange} value={props.value}  >
      {
        props.list?props.list.map((v,i)=>{
          return <Radio value={v.key} key={v.key+v.text+i}>{v.text}</Radio>
        }):""
      }
    </Radio.Group>
  );
}

export default FieldRadio;

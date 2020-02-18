import React from 'react';
import { Checkbox } from 'antd';


export const CheckboxBlock = (props) => {
  const check =(e) => {
  }
  return (
  <Checkbox onChange={check}>{props.children}</Checkbox>
  )
}
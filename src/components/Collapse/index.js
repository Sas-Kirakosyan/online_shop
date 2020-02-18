import React , {useEffect} from 'react';
import { Collapse } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsDetalis } from '../pages/Category/actions'



//components
import { CheckboxBlock } from '../Checkbox/index';

import "antd/dist/antd.css";
import * as S from './Collapse.styles';
import { Link } from 'react-router-dom'; 
const { Panel } = Collapse;


export const CollapseBlock = (props) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if(props.parameters.category){
  //     dispatch(getProductsDetalis(props.parameters));
  //   }
  // }, [props.parameters])
  // console.log('props.parameters',props.parameters)
  const collapseState = useSelector(state => state.collapse);
  const { connections, manufacturer, countries } = collapseState;

  console.log('collapseState', collapseState )
  return (
    <Collapse>
      <Panel header="Category" key="1">
        {connections && connections.map(el => (
          <div key={el.name} className='collapse-el'>
          <Link to={{pathname: `/types/${props.category}/${el.name}`}}>
            <S.Label>{el.name}</S.Label>
             </Link> 
           {el.subcategories && (
              <Collapse style={{border: '1px solid red'}}>
                <Panel className='inner-block'>
                  {el.subcategories.map((el, i)=> (
                 <Link key={i} to={{
                  pathname: `/subcategories/${props.category}/${el.name}`, 
                  }} >
                    <CheckboxBlock key={i}>{el.name}</CheckboxBlock></Link>
                  ))}
                </Panel>
              </Collapse>)}
          </div>
        ))}
      </Panel>
      <Panel header="Price" key="2">
      </Panel>
      <Panel header="MANUFACTURER" key="3">
          {manufacturer && manufacturer.map((el, i) => (
            <S.Label key={i}>{el.manufacturer}</S.Label>
          ))}
      </Panel>
      <Panel header="WINE COUNTRY" key="4">
          {countries && countries.map((el,i) => (
            <S.Label key={i}>{el.countries}</S.Label>
          ))}
      </Panel>
      <Panel header="COMPARE PRODUCTS" key="5">

      </Panel>
  </Collapse>
  )
};
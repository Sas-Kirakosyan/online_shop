import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";

import './style.scss';
import { getProducts } from './actions';
import { ProductItem } from '../../index';
import { newProducts } from '../../../util/service-urls';

export const Products = (props) => {
  const dispatch = useDispatch();
  
  const items = useSelector(state => state.products);

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:8000,
     arrows:true,
    adaptiveHeight:true
  };
//  console.log('productType: ', items[props.productType]);
  
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return(
    <>
    <div className="newProducts-wrapper">
      <h4>{props.title}</h4>
      <Slider {...settings} className='slide-carousel'>
          {items[props.productType].length>0 && items[props.productType].map(el => (
              <ProductItem 
                key={el.id}
                src={`${newProducts}${el.filename}`}
                price={el.price}
                name={el.name}
              />
            ) 
          )}
      </Slider>
    </div>
    <div>
    
    </div>
  </>
  )
}
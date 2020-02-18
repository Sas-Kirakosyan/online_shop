import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { getBrandProducts } from './actions';
import { URLBrands } from '../../../util/service-urls';
import './style.scss';

export const BrandSlider = (props) => {
  const dispatch = useDispatch();

  const items = useSelector(state => state.brandSlider.items);
  
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };
  console.log('brend', items);
  useEffect(() => { 
    dispatch(getBrandProducts());
  },[])

  return(
    <div  className="brandProducts-wrapper">
      <h4>SHOP BY BRAND</h4>
      <Slider {...settings}>
       {items.length > 0 && items.map(el => (
            <Link to='/' key={el.name}>
              <img alt='slider-img' src={`${URLBrands}${el.dashboard_image}`}/>
            </Link>
        ))}
      </Slider>
    </div>
  )
}
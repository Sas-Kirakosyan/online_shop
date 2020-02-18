import React, { useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { getBanners } from './actions';
import {banners} from '../../../util/service-urls';
import './styles.scss';

export const MainSlider = (props) => {

  
  
  const dispatch = useDispatch();
  const items = useSelector(state => state.mainSlider.items);


  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:8000,
    arrows:true,
    adaptiveHeight:true
  };

  useEffect(() => {
    dispatch(getBanners())
  },[])

   return (
    <div className="mainSlider-wrapper">
      <Slider {...settings}>
          {items.length > 0 && items.map(el => (
            <Link to='/' key={el.filename}>
              <img src={`${banners}${el.filename}`} alt="main-slider"/>
            </Link>
          ))}
      </Slider>
    </div>

  )
}

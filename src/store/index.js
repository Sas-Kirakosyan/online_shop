import { combineReducers } from 'redux';
import { brandSlider } from '../components/Home/BrandSlider/reducer';
import { mainSlider } from '../components/Home/MainSlider/reducer';
import { products } from '../components/Home/Products/reducer';
import { category } from '../components/pages/Category/reducer';
import { collapse } from '../components/Collapse/reducer';


export default combineReducers({
  brandSlider,
  mainSlider,
  products,
  category,
  collapse,
})
import React from 'react';

import { 
  NavigationBar,
  BlackWishList,
  GridCubics,
  BrandSlider,
  BestSeller,
  Footer,
  Products,
  Blogs,
  MainSlider
} from '../index';

export const Homepage = () => {
  
  return(
    <>
      <BlackWishList/>
      <NavigationBar/>
      <MainSlider />
      <GridCubics/>
      <BrandSlider/>
      <Products 
        title='New Products'
        productType='newProducts'
/>
      <BestSeller/>
      <Products 
        title='Featured Products'
        productType='featuredProducts'
      />
      <Blogs/>
      <Footer/>
    </>
  )
}

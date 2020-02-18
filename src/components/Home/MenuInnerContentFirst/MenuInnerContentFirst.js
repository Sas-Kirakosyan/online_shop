import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import './style.scss'
import { 
  bottle,
  logo,
  importedWine,
  domesticWine,
  peachWine
} from '../../../assets/img';

export const MenuInnerContentFirst = () => {
  
  return(
    <>
        <div className="container-menu-InnerContentFirst">
        <div className="item nav-1">
          <h3>Wine</h3>
          <a href="/types/wine/red">Red Wine <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
          <a href="/types/wine/sparkling">Sparkling Wine <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
          <a href="/types/wine/sake">Sake <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
          <a href="/types/wine/white">White wine <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
          <a href="">New wines <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
          <a href="/types/wine/90pt">90pt Plus wines <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
        </div>
        <div className="item nav-2">
          <img width="10" src={ bottle } alt="Thumbnail"/>
          <a href="/types/wine/red" className="heading">Red Wine</a>
          <a href="/subcategories/wine/red/shiraz">Shiraz </a>
          <a href="/subcategories/wine/red/merlot">Merlot </a>
          <a href="/subcategories/wine/red/cabernet-sauvignon">Cabernet Sauving </a>
          <a href="/subcategories/wine/red/malbec">Malbec </a>
          <a href="/subcategories/wine/red/pinot-noir">Pinot Noir </a>
          <a href="/subcategories/wine/red/zinfandel">Zinfandel </a>
          <a href="/subcategories/wine/red/sangiovese">Sangiovese </a>
          <a href="/subcategories/wine/red/barbera">Barbera </a>
          <a href="/subcategories/wine/red/red-blends">Red blends </a>
          <a href="/subcategories/wine/red/rose-wine">Rose Wine </a>
          <a href="/subcategories/wine/red/sangria">Sangria </a>
          <a href="/subcategories/wine/red/port">Port </a>
          <a href="/subcategories/wine/red/syrah">Syrah</a>
        </div>
        <div className="item">
          <a href="/types/wine/sparkling" className="heading">Sparkling Wine</a>
          <a href="/types/wine/sake" className="heading">Sake</a>
          <a href="/types/wine/white" className="heading">White wine</a>
          <a href="/subcategories/wine/white/chardonnay">Chardonnay </a>
          <a href="/subcategories/wine/white/sauvignon-blanc">Sauvignon Blanc </a>
          <a href="/subcategories/wine/white/semillon">Semillon </a>
          <a href="/subcategories/wine/white/moscato">Moscato </a>
          <a href="/subcategories/wine/white/pinot-grigio">Pinot Grigio</a>
          <a href="/subcategories/wine/white/gewurztraminer">Gewurztraminer </a>
          <a href="/subcategories/wine/white/riesling">Riesling </a>
          <a href="/subcategories/wine/white/white-blends">White blends </a>
          <a href="/subcategories/wine/white/sangria">Sangria </a>
          <a href="/subcategories/wine/white/viognier">Viognier </a>
          <a href="/subcategories/wine/white/chardonnay" className="heading">New Wines</a>
          <a href="/types/wine/90pt" className="heading">90pt Plus Wines</a>
        </div>
        <div className="item slider">
          <Carousel 
                   showIndicators={false} 
                   showThumbs={false} 
                   showStatus={false}>
                  <div>
                      <img src={ importedWine } />
                      <p className="legend">Imported</p>
                  </div>
                  <div>
                      <img src={ domesticWine } />
                      <p className="legend">Legend 2</p>
                  </div>
                  <div>
                      <img src={ peachWine } />
                      <p className="legend">Legend 3</p>
                  </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}
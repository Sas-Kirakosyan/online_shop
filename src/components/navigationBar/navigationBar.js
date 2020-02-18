import React from 'react';
import { Link } from 'react-router-dom'; 

import './style.scss';
import { 
    BlackWishList,
    MenuInnerContentFirst,
    MenuInnerContentSecond,
    MenuInnerContentThird,
   MenuInnerContentFourth
   
 } from '../index';
  // import MenuInnerContentFourth from './Home/MenuInnerContentFourth/MenuInnerContentFourth'
import { logo } from '../../assets/img'


 export const NavigationBar = (props) => {

  return(
      <header className="mainMenuNavigationBar">
        <BlackWishList/>
        <div className="wrapper">
          <div className="item logo">
            <Link to="/"><img src={ logo } alt="logo"/></Link>
          </div>
          <div className="item nav-links">
            <div className="pos-abs-container">
              <div className="link-svg">
              <Link  to="/categories/wine">Wine</Link>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                  <g>
                    <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
                  </g>
                </svg>
              </div>
              <div className="pos-abs">
                <MenuInnerContentFirst/>
              </div>
            </div>
            <div className="pos-abs-container">
              <div className="link-svg">
                <Link  to="/categories/spirits">Spirits</Link>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" >
                  <g>
                    <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
                  </g>
                </svg>
              </div>
              <div className="pos-abs">
                  <MenuInnerContentSecond/>
              </div>

            </div>
            <div className="pos-abs-container">
              <div className="link-svg">
                <Link to="/categories/specials">Specials</Link>
              </div>
            </div>
            <div className="pos-abs-container">
              <div className="link-svg">
                <Link to="/categories/beer">Beer</Link>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                  <g>
                    <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
                  </g>
                </svg>
              </div>
              <div className="pos-abs">
                 <MenuInnerContentThird/>
              </div>

            </div>
            <div className="pos-abs-container">
              <div className="link-svg">
                <Link to="/categories/non-alcoholic">Non Alcoholic</Link>
              </div>
            </div>
            <div className="pos-abs-container">
              <div className="link-svg">
                <Link to="/categories/gift-sets">Gift sets</Link>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                  <g>
                    <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
                  </g>
                </svg>
              </div>
              <div className="pos-abs">
              <MenuInnerContentFourth/>
              </div>
            </div>
            <div className="pos-abs-container">
              <div className="link-svg">
                <Link to="/categories/pre-order">Pre-Order</Link>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                  <g>
                    <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
                  </g>
                </svg>
              </div>
              <div className="pos-abs">
                <MenuInnerContentThird/>
              </div>
            </div>
          </div>
          <div className="item">
            <form action="">
              <input type="text" placeholder="Search entries store here..."/><button>Search</button>
            </form>
          </div>
        </div>
    </header>
  )
}




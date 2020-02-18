import React from 'react';

import './style.scss';

export const MenuInnerContentThird = () => {
  return (
      <div className="container-menu-innerContentThird">
        <div className="item nav-1">
          <h3>title</h3>
          <a href="">mainTitleFirst<img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
          <a href="">mainTitleSecond<img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
        </div>
        <div className="item nav-2">
          <a href="" className="heading">mainTitleFirst</a>
        </div>
        <div className="item">
          <a href="" className="heading">mainTitleSecond</a>
        </div>
      </div>
  )
}

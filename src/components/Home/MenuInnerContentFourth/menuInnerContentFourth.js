import React from 'react';

import './style.scss';

export const MenuInnerContentFourth = () => {

  return (
    <div className="container-menu-innerContentFourth">
    <div className="item nav-1">
      <h3>Gift Sets</h3>
      <a href="/types/gift-sets/gift-baskets">Gift Baskets <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
      <a href="/types/gift-sets/engraving">Engraving <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
      <a href="/types/gift-sets/chocolates">Chocolates <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
      <a href="/types/gift-sets/decorative-bottles">Decorative Bottles <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
      <a href="/types/gift-sets/gift-sets">Gift Sets <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
    </div>
    <div className="item nav-2">
      <a href="/types/gift-sets/gift-baskets" className="heading">Gift Baskets</a>
      <a href="/types/gift-sets/engraving" className="heading">Engraving</a>
      <a href="/types/gift-sets/chocolates" className="heading">Chocolates</a>

    </div>
    <div className="item">
      <a href="/types/gift-sets/decorative-bottles" className="heading">Decorating bottles</a>
      <a href="/types/gift-sets/gift-sets" className="heading">gift sets</a>
    </div>
  </div>
  )
}



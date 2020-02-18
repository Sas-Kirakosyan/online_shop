import React from 'react';

import './style.scss';

export const MenuInnerContentSecond = () => {

  return(
       <div className="container-menu">
        <div className="item nav-1">
            <h3>Spirits</h3>
            <a href="/types/spirits/brandy">Brandy Cognac <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/gin">Gin <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/liqueur">Liqueurs <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/rum">Rum <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/tequila">Tequila<img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/vodka">Vodka <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/scotch">Scotch <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/whiskey">Whiskey <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/mixers">Mixers <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/grappa">Grappa <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/bourbon">Bourbon <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/mezcal">Mezcal <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/arak">Arak <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
            <a href="/types/spirits/rtd">RTD <img src="../../assets/img/icons/right-arrow.svg" alt=""/></a>
        </div>
        <div className="item nav-2">
            <a href="/types/spirits/brandy" className="heading">Brandy Cognac</a>
            <a href="/types/spirits/gin" className="heading">Gin</a>
            <a href="/types/spirits/liqueur" className="heading">Liqueures</a>
            <a href="/types/spirits/rum" className="heading">Rum</a>
            <a href="/types/spirits/tequila" className="heading">Tequila</a>
            <a href="/types/spirits/vodka" className="heading">Vodka</a>
            <a href="/types/spirits/scotch" className="heading">Scotch</a>
        </div>
        <div className="item">
            <a href="/types/spirits/whiskey" className="heading">Whiskey</a>
            <a href="/types/spirits/mixers" className="heading">Mixers</a>
            <a href="/types/spirits/grappa" className="heading">Grappa</a>
            <a href="/types/spirits/bourbon" className="heading">Bourbon</a>
            <a href="/types/spirits/mezcal" className="heading">Mezcal</a>
            <a href="/types/spirits/arak" className="heading">Arak</a>
            <a href="/types/spirits/rtd" className="heading">Rtd</a>
        </div>
        <div className="item slider">
        </div>
    </div>
  )
}


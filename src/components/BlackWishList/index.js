import React from 'react';
import { 
  user, 
  // cartShopWhite,
  login
} from '../../assets/img/index'
import './style.scss';

export const BlackWishList = () => {
  return(
    <>
      <div className="wrapper-wishlist">
        <div className="container-black">
          <div className="item">
            <a href="/constant-contact">Exclusive Mailing List</a>
            <a href="/events">Events</a>
            <a href="/customer-login">My Wishlist</a>
          </div>
          <div className="item">
            <a href="/customer-login">
              <div className="flex-wrapper">
                <div><img src={user} alt='user' /></div>
                <span>My Account</span>
              </div>
            </a>
            <a href="/customer-login" style={{position: 'relative'}} >
              <div className="flex-wrapper">
                <div>
                  {/* <img src={cartShopWhite} alt=""/> */}
                </div>
                <span>My Cart</span>
                  <span className="quantity">1</span>
              </div>
            </a>
            {/* <CartModal/> */}
            <a href="/customer-login">
              <div className="flex-wrapper">
                <div>
                  <img src={login} alt=""/>
                </div>
                <span>Login</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}



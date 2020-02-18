import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import {
  heart,
  share
} from '../../../assets/img';

export const ProductItem = (props) => {
  return (
    <div className="container-prod">
      <div className="img-wrapper">
        <img
          className="main-img"
          alt="img"
          src={props.src}
        />
      </div>
      <p>
        {props.name}
      </p>
      <span className="price">
        {props.price}
      </span>
      <Link
        to="/"
        className="redish">
        Add to Cart
      </Link>
      <span className="stock-info">
        {props.stock}
      </span>
      <div className="add-to-links-secondary" >
        <Link
          to="/customer-login"
          className="action wishlist"
          data-action="add-to-wishlist"
          title="Wishlist">
          <img src={heart} alt="heart" />
        </Link>
        <Link
          to="/customer-login"
          className="action compare"
          title="Compare">
          <img src={share} alt="share" />
        </Link>
      </div>
    </div>
  )
}
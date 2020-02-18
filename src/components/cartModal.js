import React from 'react';

import styled from 'styled-components';

export const CartModal = () => {

  return(
      <div class="cart-wrapper">
        <div class="item-total-wrapper">
          <div><span>1</span>item in Cart</div>
          <div>Cart subtotal : {/*</br> */} <span class="price blacked">$214.99</span>
          </div>
        </div>
        <div class="btn-wrapper"><a href="/checkout">Proceed to checkout</a></div>
        <div class="img-card">
          <a href="" class="img-wrapper">
            <img 
            src="https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/catalog/product/cache/f7f5f0f18a9d207e21eba77323c56fb6/h/a/hazelburn-15-year-old_cognac-cask-web.jpg" 
            alt=""/>
          </a>
          <div>
           <a href="">HAZELBURN SCOTCH SINGLE MALT CAMPBELTOWN SINGLE CASK 15YR 750ML</a>
           <div class="item-total-wrapper">
             <span class="price">$214.99</span>
             <span>
               <label for="number">Qty:</label>
               <NumberInputStyled type="number" id="number"/>
               </span>
           </div>
          </div>
        </div>
        <div class="btn-wrapper second">
          <a href="/shopping-cart">View and Edit Cart</a>
        </div>
      </div>
  )
}

const CartWrapper = styled.div`
font-family: 'Open Sans', sans-serif;
    position: absolute;
    color: #666;
    border: 1px solid #bab8b8;
    width: 360px;
    background: #fff;
    left: 66%;
    top: 30px;
    z-index: 9;
    .item-total-wrapper{
      padding:16px 24px;
      display: flex;
      justify-content: space-between;
      span{
        font-weight: 600;
        &:nth-child(1){
          margin-right: 8px;
        }
        &:nth-child(2){
          margin-left: 8px;
        }
      }
      .price.blacked{
        color: #666;
      }
      .price{
        font-size: 18px;
        color: #ae0814;
      }
      input{
        pointer-events: none;
        width: 32px;
        padding: 4px 4px;
        border: 1px solid #bab8b8;
      }
      label{
        margin-right: 10px;
      }
    }
    .btn-wrapper{
      padding: 0 24px;
      a{
        text-transform: uppercase;
        background-color: #ae0814;
        color: #fff;
        font-size: 14px;
        border: none;
        padding: 8px 20px;
        width: 100%;
        cursor: pointer;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
      }
    }
    .img-card{
      padding:16px 24px;
      margin-top: 20px;
      border-top: 1px solid #bab8b8;
      border-bottom: 1px solid #bab8b8;
      font-weight: 600;
      display: flex;
      color: #666;
      justify-content: space-between;
      a{
        text-decoration: none;
        font-weight: normal;
        color: #333;
        line-height: 2;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    .img-wrapper{
      width: 150px;
      img{
        width: 100%;
        object-fit: cover;
      }
    }
    .btn-wrapper.second{
      padding:16px 24px;
    }
` 


const NumberInputStyled = styled.input`
  -moz-appearance:textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
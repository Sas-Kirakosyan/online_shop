import React from 'react';

import './style.scss'

export const NewsLetter = () => {
  
  return (
    <div>
      <div className="alert alert-success" style={{marginBottom: '0px;padding:10px'}}>
          <strong>Success!</strong> Please check your email to verify your subscription.
      </div>
      <div className="newsletter">
          <p>Sign Up for Our Newsletter</p>
          <input placeholder="Subscribe in our nesletter" type="email"/>
          <button>Subscribe here</button>
      </div>
    </div>
  )
}


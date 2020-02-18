import React from 'react';
import {NavigationBar}  from '../components/navigationBar/navigationBar'

import {Switch, withRouter, Route} from 'react-router-dom';

import { 
  Homepage, 
  About,
  Category,
 } from '../components/pages/index';

const Index = () => {
   return(
  <div className="main-root-container">
    <NavigationBar />
      <Switch>
        <Route exact path='/' component={ Homepage }/>
        <Route path='/about' component={ About }/>
        <Route path='/categories/:category' component={ Category }/>
        <Route path='/types/:category/:type' component={ Category }/>
        <Route path='/subcategories/:category/:type/:subcategory' component={ Category }/>
        {/* <Route path='/card' component={} /> */}
      </Switch>
    </div>
    )
}

export default withRouter(Index)
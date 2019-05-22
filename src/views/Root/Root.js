import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePageView from '../HomePageView/HomePageView';
import ListView from '../ListView/ListView';
import HeaderWrapper from '../../components/Header/HeaderWrapper'
import DetailView from '../DetailView/DetailView'

import Contact from '../Contact/Contact'
import './index.css';


const Root = () => {


  return (


    <BrowserRouter>
      <>
        <HeaderWrapper />
        <Switch>
          <Route exact path="/" component={HomePageView} />
          <Route path="/contact" component={Contact} />
          <Route path="/category/:id" render={props => <ListView {...props} /> } />
          <Route path="/movie/:id" render={props => <DetailView {...props} /> } />
        </Switch>
      </>
    </BrowserRouter>

  )

}

export default Root;

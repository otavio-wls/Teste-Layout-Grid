import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login/index';
import Contact from '../pages/Contact/index';
import Plans from '../pages/Plans/index';


function Routes() {
  return(
    <BrowserRouter>
      <Route exact path='/' component={Login} />
      <Route path='/contact' component={Contact} />
      <Route path='/plans' component={Plans} />
    </BrowserRouter>

  );
}
export default Routes;
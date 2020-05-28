import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import Faq from '../FAQ/Faq';
import MainLayout from '../MainLayout/MainLayout';
import List from '../List/ListContainer';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
  <BrowserRouter>  
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/Faq' component={Faq} />
        <Route exact path="/list/:id" component={List} />
      </Switch>
    </MainLayout> 
  </BrowserRouter>
);

export default App;
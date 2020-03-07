import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import ArticlePage from './pages/ArticlePage/ArticlePage';
import HomePage from './pages/HomePage/HomePage';

export default function AppRouter () {
  return (
    <Switch>
      <Route path="/article/:articleId" component={ArticlePage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/" component={HomePage}/>

      <Route component={HomePage}/>
    </Switch>
  );
}

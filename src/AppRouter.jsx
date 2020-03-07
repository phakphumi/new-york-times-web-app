import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import ArticlePage from './pages/ArticlePage/ArticlePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default function AppRouter () {
  return (
    <Switch>
      <Route exact path="/article/:articleId" component={ArticlePage}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/" component={HomePage}/>

      <Route exact path="/error" component={ErrorPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  );
}

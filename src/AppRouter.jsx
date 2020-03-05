import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

export default function AppRouter () {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

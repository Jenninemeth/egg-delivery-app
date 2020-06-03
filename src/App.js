import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const SignInPage = () => (
  <div>
    <h1>Sign-in page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;

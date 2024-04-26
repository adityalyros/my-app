import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp'
import Login from './Login';
import Profile from './Profile';

import AuthContextProvider from './AuthContextProvider';


function App() {
  return (
    <Router>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <AuthContextProvider>
          <Route path="/profile" component={Profile} />
        </AuthContextProvider>

    </Router>
  );
}

export default App;

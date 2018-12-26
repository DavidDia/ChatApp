import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SignInPage from './components/signIn/signInPage';
import SignUpPage from './components/signUp/signUpPage';
import Home from './components/home/home';

class App extends Component {

    render() { 
        return (  
            <div>
              <Route exact path='/' component={Home}/>
              <Route path='/SignIn' component={SignInPage}/>
              <Route path='/SignUp' component={SignUpPage}/>
            </div>
        );
    }
}
 
export default App;
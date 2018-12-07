import React, { Component } from 'react';
import {Redirect, Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';

import SignInPage from './components/signIn/signInPage';
import SignUpPage from './components/signUp/signUpPage';
import Home from './components/home/home';

class App extends Component {

    render() { 
        return (  
            <div>
                <Link to='/signIn'>Sign In</Link>
                <br/>
                <Link to='/signUp'>Sign Up</Link>

                <Route exact path='/' component={Home}/>
                <Route path='/signIn' component={SignInPage}/>
                <Route path='/signUp' component={SignUpPage}/>
            </div>
        );
    }
}
 
export default App;
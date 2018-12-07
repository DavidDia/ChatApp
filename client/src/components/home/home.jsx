import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import SignInPage from '../signIn/signInPage';
import SignUpPage from '../signUp/signUpPage';

class home extends Component {
    render() { 
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}
 
export default home;
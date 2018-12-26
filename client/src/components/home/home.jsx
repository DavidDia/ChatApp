import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';

class home extends Component {
    render() { 
        return (
            <div>
                <h1>Home</h1>

                <Link to='/signIn'>Sign In</Link>
                <br/>
                <Link to='/signUp'>Sign Up</Link>
            </div>
        );
    }
}
 
export default home;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import SignUpPage from '../signUp/signUpPage';

import './signInStyle.css';

class signInPage extends Component {

    render() { 
        return ( 
            <div className='flexTop'>

                <h1>App</h1>

                <div className='box'>

                    <div className="left">
                        <img src="https://picsum.photos/300/300?random" alt="Image"/>
                    </div>

                    <div className="right">
                    
                    <form action="/login" method='post'>
                        <h2>Sign In</h2>
                        <label htmlFor="Username">Username/E-mail: </label>
                        <input type="text" placeholder='username/e-mail'/>
                        <br />
                        <label htmlFor="password">Password: </label>
                        <input type="password" placeholder='Password'/>
                        <br/>
                        <button>Sign In</button>
                        <br/>
                        <br/>
                       
                    </form>
                    {/* TODO> Redirect to Sign Up page */}

                    <Router>
                        <React.Fragment>
                            <Link className='Haveacc' to="/signUp">Have an account?</Link>
                            <Route path='/SignUp' exact component={SignUpPage}/>
                        </React.Fragment>
                    </Router>
                    
                </div>


                </div>
            </div>
         );
    }
}
 
export default signInPage;
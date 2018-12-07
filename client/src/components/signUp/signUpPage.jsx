import React, { Component } from 'react';

import './signUpStyle.css';

class loginPage extends Component {
    
    render() { 
        return ( 
            <div className='flexTop'>

                <h1>App</h1>

                <div className='box'>

                    <div className="left">
                        <img src="https://picsum.photos/300/300?random" alt="Image"/>
                    </div>

                    <div className="right">
                    
                    <form action="/register" method='post'>
                        <h2>Sign Up</h2>
                        <label htmlFor="Username">Username/E-mail: </label>
                        <input type="text" placeholder='username/e-mail'/>
                        <br/>
                        <label htmlFor="fullName">Full Name: </label>
                        <input type="text" placeholder='Full Name'/>
                        <br />
                        <label htmlFor="password">Password: </label>
                        <input type="password" placeholder='Password'/><br />
                        <label htmlFor="passwordAgain">Password again: </label>
                        <input type="password" placeholder='Password again'/>
                        <br/>
                        <br/>
                        <button>Sign In</button>
                        <br/>
                        <br/>
                    </form>

                    </div>
                    
                </div>


            </div>
         );
    }
}
 
export default loginPage;
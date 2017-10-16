import React, { Component } from 'react';
import SignUpForm from './Users/SignUpForm'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>home page</h1>

                <SignUpForm />
            </div>
        );
    }
}

export default HomePage;
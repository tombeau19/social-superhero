import React, { Component } from 'react';
import SignUpForm from './SignUpForm'
import styled from 'styled-components'


const Content = styled.div`
    background-image: url('../../images/superhero-background-7224.jpeg');
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <Content>

                    <SignUpForm />
                </Content>
            </div>
        );
    }
}

export default HomePage;
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%
`
const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 250px;
    padding: 0px;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5%
`

const ButtonSignUp = styled.button`
    border: none;
    background: none;
    font-size: 20px;
    font-family: 'Concert One', cursive;
    color: #286EB5;
    &:hover {
        text-shadow: 1px 1px 2px #286EB5;
    }
`

const InputField = styled.input`
    background-color: rgba(255, 255, 255, 0.95);
`

class SignUpForm extends Component {

    state = {
        newUser: {
            name: '',
            superHeroName: '',
            password: ''
        },
        redirectToUserPage: false,
        newUserId: ''
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = { ...this.state.newUser }
        updateUser[attribute] = event.target.value
        this.setState({ newUser: updateUser })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })
        this.setState({ redirectToUserPage: true, newUserId: res.data._id })
    }

    render() {
        if (this.state.redirectToUserPage) {
            return <Redirect to={`/users/${this.state.newUserId}`} />
        }
        return (
            <FormContainer>
            <FormBox>
                <h2>Start Today</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label><br/>
                        <InputField onChange={this.handleChange} name="name" type="text" value={this.state.newUser.name}/>
                    </div>
                    <div>
                        <label htmlFor="superHeroName">Superhero Name</label><br/>
                        <InputField onChange={this.handleChange} name="superHeroName" type="text" value={this.state.newUser.superHeroName}/>
                    </div>
                    <br/>
                    <ButtonSignUp>Sign Up</ButtonSignUp>
                </form>
            </FormBox>
            </FormContainer>
        )
    }
}

export default SignUpForm;
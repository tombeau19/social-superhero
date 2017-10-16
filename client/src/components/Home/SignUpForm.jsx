import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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
            <div>
                <h3>Sign-Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input onChange={this.handleChange} name="name" type="text" value={this.state.newUser.name}/>
                    </div>
                    <div>
                        <label htmlFor="superHeroName">Superhero Name</label>
                        <input onChange={this.handleChange} name="superHeroName" type="text" value={this.state.newUser.superHeroName}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.newUser.password}/>
                    </div>
                    <button>Sign Up</button>
                </form>

            </div>
        )
    }
}

export default SignUpForm;
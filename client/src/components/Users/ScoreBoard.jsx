import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from '../Home/SignUpForm'

class ScoreBoard extends Component {

    state = {
        users: []
    }

    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    componentWillMount() {
        this.getAllUsers()
    }

    render() {
        return (
            <div>
                <h1>Superheros</h1>
                <h3>Scoreboard</h3>
                
                {this.state.users.map((user) => {
                return (<div><Link key={user._id} to={`/users/${user._id}`}>{user.superHeroName}</Link>: {user.score} points</div>)
                })}
            </div>
        );
    }
}

export default ScoreBoard;
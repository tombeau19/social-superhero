import React, { Component } from 'react';
import axios from 'axios'

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
                    return (<div>{user.superHeroName}</div>)
                })}

            </div>
        );
    }
}

export default ScoreBoard;
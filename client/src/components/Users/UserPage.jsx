import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SituationPage from '../Situations/SituationPage'

class UserPage extends Component {

    state = {
        user: {
            name: '',
            superHeroName: '',
            password: '',
            settings: [],
            score: 0
        }
    }

    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }

    render() {
        return (
            <div>
                <h1>{this.state.user.superHeroName}</h1>
                <div>Where Are You?</div>
                {this.state.user.settings.map((setting) => {
                    return (<div><Link key={setting._id} to={`/users/${this.state.user._id}/settings/${setting._id}`}>{setting.location}</Link></div>)
                })}
                <SituationPage 
                    superHeroName={this.state.user.superHeroName}
                    score={this.state.user.score}
                />
            </div>
        )
    }
}

export default UserPage;
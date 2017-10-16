import React, { Component } from 'react'
import axios from 'axios'

class SituationPage extends Component {

    state = {
        user: {
            situations: []
        }
    }

    async componentWillMount() {
        const { userId, settingId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/settings/${settingId}`)
        this.setState({ user: res.data })
    }

    render() {
        return (
            <div>
                <h2></h2>
                <h3>What's the 'Sitch?</h3>
                <div>
                    {this.state.user.situations.map((situation) => {
                        return (<div>{situation.title}</div>)
                    })}
                </div>
            </div>
        )
    }
}

export default SituationPage;
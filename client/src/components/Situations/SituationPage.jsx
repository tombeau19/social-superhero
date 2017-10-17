import React, { Component } from 'react'
import axios from 'axios'
import SituationsList from './SituationsList'
import { Link } from 'react-router-dom'

class SituationPage extends Component {

    state = {
        user: {
            // name: '',
            // superHeroName: '',
            // settings: [{
                    location: '',
                    situations: [],
            // }],
            // score: 0
        }
    }

    async componentWillMount() {
        const { userId, settingId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/settings/${settingId}`)
        this.setState({ user: res.data })
        console.log(res.data)
    }

    deleteSituation = async (situationId) => {
        const { userId, settingId } = this.props.match.params
        const id = situationId
        const res = await axios.delete(`/api/users/${userId}/settings/${settingId}/situations/${id}`)
        this.setState({ user: res.data })
    }

    createNewSituation = async () => {
        const { userId, settingId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/settings/${settingId}/situations`)
        this.setState({ user: res.data })
    }

    handleChange = (event, situationId) => {
        const attribute = event.target.name
        const clonedUser = {...this.state.user}
        const situation = clonedUser.situations.find(i => i._id === situationId)
        console.log(situation)
        situation[attribute] = event.target.value
        this.setState({user: clonedUser})
    }

    updateSituation = async (situationId) => {
        const { userId, settingId } = this.props.match.params
        const id = situationId
        const clonedUser = {...this.state.user}
        const situation = clonedUser.situations.find(i => i._id === situationId)
        const res = await axios.patch(`/api/users/${userId}/settings/${settingId}/situations/${id}`)
    }

    render() {
        return (
            <div>
                <h2>{this.state.user.location}</h2>
                <h2>{this.state.user.superHeroName}</h2>
                <h3>What's the 'Sitch?</h3>
                <button onClick={this.createNewSituation}>New 'Sitch</button>
                <SituationsList
                    situations={this.state.user.situations}
                    createNewSituation={this.createNewSituation}
                    updateSituation={this.updateSituation}
                    handleChange={this.handleChange}>
                </SituationsList>
            </div>
        )
    }
}

export default SituationPage;
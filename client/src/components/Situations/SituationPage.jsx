import React, { Component } from 'react'
import axios from 'axios'
import SituationsList from './SituationsList'

class SituationPage extends Component {

    state = {
        score: 0,
        setting: {
            location: '',
            situations: [{
                actions: []
            }]
        }
    }

    async componentWillMount() {
        const { userId, settingId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}/settings/${settingId}`)
        this.setState({ setting: res.data })
    }

    createNewSituation = async () => {
        const { userId, settingId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/settings/${settingId}/situations`)
        this.setState({ setting: res.data })
    }

    deleteSituation = async (situationId) => {
        const { userId, settingId } = this.props.match.params
        const res = await axios.delete(`/api/users/${userId}/settings/${settingId}/situations/${situationId}`)
        this.setState({ setting: res.data })
    }

    handleSituationChange = (event, situationId) => {
        const attribute = event.target.name
        const clonedSetting = { ...this.state.setting }
        const situation = clonedSetting.situations.find(i => i._id === situationId)
        situation[attribute] = event.target.value
        this.setState({ setting: clonedSetting })
    }

    addAction = (action, situationId) => {
        const clonedSetting = {...this.state.setting}
        const situation = clonedSetting.situations.find(i => i._id === situationId)
        situation.actions.push(action)
        this.setState({ setting: clonedSetting })
        this.updateSituation(situationId)
    }

    updateSituation = async (situationId) => {
        const { userId, settingId } = this.props.match.params
        const clonedSetting = { ...this.state.setting }
        const situation = clonedSetting.situations.find(i => i._id === situationId)
        const res = await axios.patch(`/api/users/${userId}/settings/${settingId}/situations/${situationId}`, {
            situation: situation
        })
        this.setState({ setting: res.data })
        console.log(res.data)
    }

    render() {
        return (
            <div>
                <h2>{this.state.setting.location}</h2>
                <h3>What's the 'Sitch?</h3>
                <button onClick={this.createNewSituation}>New 'Sitch</button>
                <SituationsList
                    situations={this.state.setting.situations}
                    deleteSituation={this.deleteSituation}
                    addAction={this.addAction}
                    updateSituation={this.updateSituation}
                    handleSituationChange={this.handleSituationChange}>
                </SituationsList>
            </div>
        )
    }
}

export default SituationPage;
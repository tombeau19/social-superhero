import React, { Component } from 'react'
import axios from 'axios'
import SituationsList from './SituationsList'
import styled from 'styled-components'


const BigTitle = styled.h1`
    font-size: 50px;
`

const ButtonSignUp = styled.button`
    border: none;
    background: none;
    font-size: 35px;
    font-family: 'Concert One', cursive;
    color: #286EB5;
    &:hover {
        text-shadow: 1px 1px 2px #286EB5;
    }
`

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
                <BigTitle>{this.state.setting.location} - What's the 'Sitch?</BigTitle>
                
                <ButtonSignUp onClick={this.createNewSituation}>New 'Sitch</ButtonSignUp>
                <hr/>
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
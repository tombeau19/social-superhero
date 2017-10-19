import React, { Component } from 'react'
import Actions from './Actions'
import styled from 'styled-components'

const SitchTitle = styled.input`
    border: none;
    font-size: 25px;
    font-family: 'Concert One', cursive;
    color: #286EB5;
    width: 1500px;
`

const Description = styled.textarea`
    width: 450px;
    height: auto;
    font-size: 15px
`

const ButtonSignUp = styled.button`
    border: none;
    background: none;
    font-size: 25px;
    font-family: 'Concert One', cursive;
    color: #286EB5;
    &:hover {
        text-shadow: 1px 1px 2px #286EB5;
    }
`

class Situation extends Component {

    state = {
        action: ''
    }

    deleteSituation = () => {
        this.props.deleteSituation(this.props._id)
    }

    handleSituationChange = (event) => {
        this.props.handleSituationChange(event, this.props._id)
    }

    handleChange = (event) => {
        const newAction = event.target.value
        this.setState({ action: newAction })
    }

    updateSituation = () => {
        this.props.updateSituation(this.props._id)

    }

    addAction = () => {
        this.props.addAction(this.state.action, this.props._id)
    }

    render() {
        return (
            <div>
                <h1><SitchTitle onBlur={this.updateSituation} onChange={this.handleSituationChange} name="title" value={this.props.title} /></h1>
                <Description onBlur={this.updateSituation} onChange={this.handleSituationChange} name="description" value={this.props.description}></Description>
                <ol>
                    {this.props.actions.map((actions) => {
                        return (
                            <Actions
                                actions={actions}
                                key={actions._id}
                                _id={actions._id}
                            >
                            </Actions>
                        )
                    })}
                    <div><h3>Add A Step:</h3>
                    <input onBlur={this.addAction} onChange={this.handleChange} name="action" />
                    </div>
                </ol>

                <div>
                    <h1>Comments:</h1>
                    <input onBlur={this.updateSituation} onChange={this.handleSituationChange} name="comment" value={this.props.comment} />
                </div>
                <br/>
                <ButtonSignUp onClick={this.deleteSituation}>Delete 'Sitch</ButtonSignUp>
                <hr />
            </div>
        )
    }
}

export default Situation;

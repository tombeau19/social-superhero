import React, { Component } from 'react'
import Actions from './Actions'

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
                <h1><input onBlur={this.updateSituation} onChange={this.handleSituationChange} name="title" value={this.props.title} /></h1>
                <textarea onBlur={this.updateSituation} onChange={this.handleSituationChange} name="description" value={this.props.description}></textarea>
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
                    <input onBlur={this.addAction} onChange={this.handleChange} name="action" />
                </ol>

                <div>
                    <h4>Comments:</h4>
                    <input onBlur={this.updateSituation} onChange={this.handleSituationChange} name="comment" value={this.props.comment} />
                </div>
                <button onClick={this.deleteSituation}>Delete 'Sitch</button>
                <hr />
            </div>
        )
    }
}

export default Situation;

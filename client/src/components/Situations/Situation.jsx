import React, { Component } from 'react';
import Actions from './Actions'

const Situation = (props) => {

    

    const updateSituation = () => {
        props.updateSituation(props._id)
    }

    const handleChange = (event) => {
        props.handleChange(props._id)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <ol>
                {props.actions.map((actions) => {
                    return (
                        <Actions
                            actions={actions}
                            key={actions._id}
                            _id={actions._id}
                        >    
                        </Actions>
                    )
                })}
                <br/><br/>
            </ol>
        </div>
    );

}

export default Situation;

import React, { Component } from 'react';
import Situation from './Situation'

const SituationsList = (props) => {
    return (
        <div>
            {props.situations.map((situation) => {
                return (
                    <Situation 
                        key={situation._id}
                        _id={situation._id}
                        handleChange={props.handleChange}
                        updateSituation={props.updateSituation}
                        title={situation.title}
                        description={situation.description}
                        actions={situation.actions}
                    >
                    </Situation>
                )
            })}
        </div>
    );
}

export default SituationsList;
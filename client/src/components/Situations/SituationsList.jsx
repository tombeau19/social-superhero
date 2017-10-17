import React from 'react'
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
                        deleteSituation={props.deleteSituation}
                        title={situation.title}
                        description={situation.description}
                        actions={situation.actions}
                        comment={situation.comment}
                    >
                    </Situation>
                )
            })}
        </div>
    )
}

export default SituationsList;
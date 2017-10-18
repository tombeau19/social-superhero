import React from 'react'
import Situation from './Situation'

const SituationsList = (props) => {
    return (
        <div>
            {props.situations.map((situation) => {
                return (
                    <div>
                        <Situation
                            key={situation._id}
                            _id={situation._id}
                            handleSituationChange={props.handleSituationChange}
                            addAction={props.addAction}
                            updateSituation={props.updateSituation}
                            deleteSituation={props.deleteSituation}
                            title={situation.title}
                            description={situation.description}
                            actions={situation.actions}
                            comment={situation.comment}
                        >
                        </Situation>
                    </div>
                )
            })}
        </div>
    )
}

export default SituationsList;
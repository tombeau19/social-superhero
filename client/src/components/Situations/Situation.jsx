import React from 'react'
import Actions from './Actions'

const Situation = (props) => {

    const deleteSituation = () => {
        props.deleteSituation(props._id)
    }

    const handleChange = (event) => {
        props.handleChange(event, props._id)
    }

    const updateSituation = () => {
        props.updateSituation(props._id)
    }

    return (
        <div>
            <h1><input onBlur={updateSituation} onChange={handleChange} name="title" value={props.title} /></h1>
            <textarea onBlur={updateSituation} onChange={handleChange} name="description" value={props.description}></textarea>
            <ol>
                {props.actions.map((actions) => {
                    return (
                        <Actions
                            deleteSituation={props.deleteSituation}
                            updateSituation={props.updateSituation}
                            handleChange={props.handleChange}
                            actions={actions}
                            key={actions._id}
                            _id={actions._id}
                        >
                        </Actions>
                    )
                })}
            </ol>
            <div>
                <input onBlur={updateSituation} onChange={handleChange} name="comment" value={props.comment} />
            </div>
            <button onClick={deleteSituation}>Delete 'Sitch</button>
        </div>
    );

}

export default Situation;

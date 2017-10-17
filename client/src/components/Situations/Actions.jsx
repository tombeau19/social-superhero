import React from 'react'

const Actions = (props) => {

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
                <li><input  onBlur={updateSituation} onChange={handleChange} name="actions" value={props.actions}/></li>
            </div>
        );

}

export default Actions;
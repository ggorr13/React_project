import React, {useEffect, useState} from "react";

const ProfileStatusWithHoocks = (props) => {

    /*
    let stateWithSetState = useState(false),
        editMode = stateWithSetState[0],
        setEditMode = stateWithSetState[1]
     */

    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);


    let activateEditMode = () => {
       setEditMode(true)
    }

    let updateStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    let deactivateEditMode = () => {
        setEditMode(false)

        props.updateStatusThunk(status)
    }
    
    useEffect( () => {
         setStatus(props.status)
    },[props.status])

    return (
        <div>
            {
                !editMode
                ?  <h6 onDoubleClick={activateEditMode}>{props.status || "======="}</h6>
                : <input onChange={updateStatus} autoFocus={true} onBlur={deactivateEditMode}
                         className={'form-control w-25'} value={status}/>
            }
        </div>
    )
}

export default ProfileStatusWithHoocks;
import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode:false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatusThunk(this.state.status)
    }

    updateStatus = (e) => {
        this.setState(() =>({status: e.currentTarget.value}));
    }

   componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status)
        this.setState({
            status:this.props.status
        })
   }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                    ? <h6 onDoubleClick={this.activateEditMode}>{this.props.status || "======="}</h6>

                    : <input onChange={this.updateStatus} autoFocus={true} onBlur={this.deactivateEditMode} className={'form-control w-25'} value={this.state.status}/>
                }
            </div>
        )
    }
}

export default ProfileStatus;
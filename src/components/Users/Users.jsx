import s from './Users.module.css';
import React from 'react';
import axios from 'axios';

class Users extends  React.Component{

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                   this.props.setUsersAC(response.data.items)
            })

    }

    render () {
        return <div>
            {
                this.props.usersPage.users.map(u => <div key={u.id} className={'mb-5'}>
                <span>
                    <div>
                        <img src={u.photos.small ?  u.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU'}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button className={'btn btn-outline-danger'} onClick={() => {this.props.unFollowAC(u.id)}}>Unfollow</button>
                            : <button className={'btn btn-outline-success'} onClick={() => {this.props.followAC(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status ? null : 'Status: Not completed'}</div>
                    </span>
                    <span>
                        <div>Country: Not completed</div>
                        <div>City: Not completed</div>
                    </span>
                </span>
                </div>)

            }
        </div>
    }
}

export default Users;
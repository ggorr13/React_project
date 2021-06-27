import s from './Users.module.css';
import React from 'react';
import axios from 'axios';

const Users = (props) => {

    if(props.usersPage.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsersAC(response.data.items)
            })
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ?  u.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU'}/>
                    </div>
                    <div>
                        {u.followed 
                        ? <button className={'btn btn-outline-danger'} onClick={() => {props.unFollowAC(u.id)}}>Unfollow</button>
                        : <button className={'btn btn-outline-success'} onClick={() => {props.followAC(u.id)}}>Follow</button>
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

export default Users;
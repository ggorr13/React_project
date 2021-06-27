import s from './Users.module.css';
import React from 'react';

const Users = (props) => {

    if(props.usersPage.users.length === 0){
        props.setUsersAC([
            {id: 1, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU', followed:false, fullName:'Den Sargsyan',status: 'i am a boss', location:{city:'Yereven',country:'Armenia'}},
            {id: 2, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU', followed:true, fullName:'Lana Harutunyan',status: 'I am a techer', location:{city:'Madrid',country:'Spain'}},
            {id: 3, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU', followed:false, fullName:'Ani Margaryan',status: 'i am manager', location:{city:'Moscow',country:'Russsia'}},
            {id: 4, urlImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU', followed:true, fullName:'Gor Tamazyan',status: 'i am a Developer', location:{city:'Los Angeles',country:'USA'}},
        ])
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.urlImg}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
}

export default Users;
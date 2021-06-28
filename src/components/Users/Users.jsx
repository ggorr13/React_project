import s from './Users.module.css';
import React from 'react';
import axios from 'axios';
import Spiner from '../Spiner/Spiner';
import { NavLink } from 'react-router-dom';

let Users2 = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for(let i = 1; i<=pageCount;i++){
        pages.push(i)
    }

    return <div>
        <div className={'mb-5'}>
            {pages.map(p => {

                    return <span className={'alert alert-light'} onClick={() => {this.onPageChanged(p)}}>
                       <span className={this.props.currentPage === p && 'fw-bolder h4'}
                             onClick={() => {this.onPageChanged(p)}}>{p}</span>
                   </span>

                })}
            </div>

            {this.props.isFetching ? <Spiner /> : null}

            {
                this.props.usersPage.users.map(u => <div key={u.id} className={'mb-5'}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+ u.id}>
                             <img src={u.photos.small ?  u.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU'}/>
                        </NavLink>
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
                        <div>{u.status ? u.status : 'Status: Not completed'}</div>
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
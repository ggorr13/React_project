import React, {PureComponent} from 'react';
import Spiner from '../Common/Spiner/Spiner';
import {NavLink} from "react-router-dom";
import s from './Users.module.css';

class Users extends PureComponent {

    pageNumber = (current) =>  {
        let lastPage = Math.round(this.props.totalUsersCount / this.props.pageSize);

        return Array.from({length:10},(_,i) => i + current >= lastPage + 1 ? "": i + current)
    }

    render () {
        return <div className={'mt-3'}>
            <div className={'mb-5'}>
                <span className={'btn btn-outline-dark'} onClick={() => {this.props.onPageChanged(1)}}>Start</span>
                {this.props.currentPage > 10 && <span className={'btn btn-outline-dark'}
                      onClick={() => {this.props.onPageChanged(this.props.currentPage - 10)}}>Back</span>}

                {this.pageNumber(this.props.currentPage).map(p => {

                    return <span className={'alert alert-light'}>
                        <span className={this.props.currentPage === p && 'fw-bolder h3'}
                            onClick={() => {
                                this.props.onPageChanged(p)
                            }}>{p}</span>
                    </span>
                })}
                {this.props.currentPage < Math.round(this.props.totalUsersCount / this.props.pageSize)
                    && <span className={'btn btn-outline-dark'}
                        onClick={() => {this.props.onPageChanged(
                            Math.round(this.props.totalUsersCount / this.props.pageSize)-9)}}>End</span>}
            </div>
            {this.props.usersPage.users.map(u => <div key={u.id} className={'mb-5'}>
                <span>
                    <div>
                        <NavLink to={'profile/' + u.id}>
                            {this.props.isFetching
                                ? <Spiner/>
                                : <img className={s.images} src={u.photos.small ? u.photos.small :
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU'}/>
                            }
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button className={'btn btn-outline-danger'} disabled={this.props.disabled}
                                      onClick={() => this.props.unFollowThunk(u.id)}>Unfollow
                            </button>
                            : <button className={'btn btn-outline-success'} disabled={this.props.disabled}
                                      onClick={() => this.props.followThunk(u.id)}>Follow
                            </button>
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
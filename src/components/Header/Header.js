import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Component} from "react";

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        return this.props !== nextProps || this.state !== nextState;
    }

    render() {

        return (
            <header className={s.header}>
                <div
                    className={'navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-md-between align-items-center'}>
                    <NavLink to={'#'} className={'navbar-brand h3'}>React</NavLink>

                    <div className={'navbar-brand h5'}>
                        {this.props.isAuth
                            ? <div className={'d-flex'}>
                                <NavLink to={'/login'} className={'navbar-brand h5'}>{this.props.login}</NavLink>
                                <button onClick={this.props.logOutThunk} className={'btn btn-outline-dark'}>Logout
                                </button>
                            </div>
                            : 'Login'
                        }
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;

import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={s.header}>
            <div className={'navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-md-between align-items-center'}>
                <NavLink to={'#'} className={'navbar-brand h3'}>React</NavLink>

                <div className={'navbar-brand h5'}>
                    {props.isAuth
                        ? <div className={'d-flex'}>
                            <NavLink to={'/login'} className={'navbar-brand h5'}>{props.login}</NavLink>
                            <button onClick={props.logOutThunk} className={'btn btn-outline-dark'}>Logout</button>
                          </div>
                        : 'Login'
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;

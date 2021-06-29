import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return (
        <header className={s.header}>
            <div className={'navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-md-between align-items-center'}>
                <NavLink to={'#'} className={'navbar-brand h3'}>React</NavLink>

                <NavLink to={'/login'} className={'navbar-brand h5'}>
                    {props.login ? props.login : 'login'}
                </NavLink>
            </div>
        </header>
    )
}

export default Header;

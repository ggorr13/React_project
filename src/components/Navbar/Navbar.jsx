import { NavLink } from 'react-router-dom';
const Navbar = () => {

    return (
        <nav className={'nav navbar-nav  navbar-light bg-light'}>
            <div className="navbar-nav text-center">
                <NavLink className="nav-item nav-link " to="/profile">Profile</NavLink>
                <NavLink className="nav-item nav-link" to="/dialogs">Messages</NavLink>
                <NavLink className="nav-item nav-link" to="/users">Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
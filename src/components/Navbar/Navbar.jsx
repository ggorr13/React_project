import s from  './Navbar.module.css';
const Navbar = () => {

    return (
        <nav className={'nav navbar-nav  navbar-light bg-light'}>
            <div className="navbar-nav text-center">
                <a className="nav-item nav-link active " href="#">Home</a>
                <a className="nav-item nav-link" href="#">Messages</a>
                <a className="nav-item nav-link" href="#">News</a>
                <a className="nav-item nav-link" href="#">Music</a>
            </div>
        </nav>
    )
}

export default Navbar;
import s from './Header.module.css';

const Header = () => {

    return (
        <header className={s.header}>
            <div className={'navbar navbar-expand-lg navbar-light bg-light'}>
                <a href={'#'} className={'navbar-brand h3'}>Tamazyan</a>
            </div>
        </header>
    )
}

export default Header;

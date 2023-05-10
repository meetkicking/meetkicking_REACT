import Logo from "./Logo";

const Header = ({user, setUser, setModalActive}) => {
    const logOut = (event) => {
        event.preventDefault();
        //setUser("");
        //localStorage.removeItem("rockUser");
        setModalActive(true);
    }

    const logIn = (event) => {
        event.preventDefault();
        setUser("Meetkicking");
        localStorage.setItem("rockUser", "Meetkicking");
    }

    return <header>
        <Logo/>
        <div className="search"></div>
        <nav className="header__menu">
        {user && <>
            <a href="">Избранное</a>
            <a href="">Корзина</a>
            <a href="">Профиль</a>
            <a href="" onClick={logOut}>Выйти</a>
        </>}
        {!user && <a href="" onClick={logIn}>Войти</a>}
        </nav>
    </header>
}

export default Header;
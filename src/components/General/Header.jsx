import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Folder2, Star, Cart4, PersonSquare, BoxArrowInRight } from "react-bootstrap-icons";

const Header = ({user, setModalActive}) => {
    

    const logIn = (event) => {
        event.preventDefault();
        //setUser("Meetkicking");
        //localStorage.setItem("rockUser", "Meetkicking");
        setModalActive(true);
    }

    return <header>
        <Logo/>
        <div className="search"></div>
        <nav className="header__menu">
        {user && <>
            <Link to="/catalog" title="Каталог">
                <Folder2/>
            </Link>
            <Link to="/" title="Избранное">
                <Star/>
            </Link>
            <Link to="/" title="Корзина">
                <Cart4/>
            </Link>
            <Link to="/profile" title="Профиль">
                <PersonSquare/>
            </Link>
            
        </>}
        {!user && <a href="" onClick={logIn} title="Войти">
                <BoxArrowInRight/>
            </a>}
        </nav>
    </header>
}

export default Header;
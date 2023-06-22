import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
    return <footer>
    <div className="footer__cell">
        <Logo />
        <div style={{ padding: "15px" }}>©{new Date().getFullYear()}</div>
    </div>
    <div className="footer__cell footer__menu">
        <Link style={{ padding: "15px" }} to="/catalog">Каталог</Link>
        <Link style={{ padding: "15px" }} to="/favorites">Избранное</Link>
        <Link style={{ padding: "15px" }} to="/basket">Корзина</Link>
        {/*
        <Link style={{ padding: "15px" }} to="">Черновик</Link>
        */}
    </div>
</footer>
}

export default Footer;
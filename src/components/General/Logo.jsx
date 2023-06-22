import image from "../../assets/images/logo.svg";

const Logo = () => {
    return <a href="/" className="logo">
        <img src={image} alt="Интернет-магазин DogFood"/>
    </a>
}

export default Logo;
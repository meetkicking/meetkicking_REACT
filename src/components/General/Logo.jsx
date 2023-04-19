import image from "../../assets/images/logo.jpg";

const Logo = () => {
    return <a href="/" className="logo">
        <img src={image} alt="DogFood"/>
        <span>RockDog</span>
    </a>
}

export default Logo;
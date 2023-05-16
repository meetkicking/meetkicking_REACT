import "./style.css";
import { Link } from "react-router-dom";
import { ArrowThroughHeart, ArrowThroughHeartFill, Percent } from "react-bootstrap-icons";

const Card = ({img, name, price, _id, discount, tags}) => {
    return <Link className = "card" to={`/product/${_id}`}>
    {discount > 0 && <span className="card__discount"><Percent/>{discount}</span>}
    <span className="card__like"><ArrowThroughHeart/></span>
    <img src={img} alt="Картинка" className="card__img"/>
    <span className="card__name">{name}</span>
    <span className="card__price">
        {discount > 0
        ? <>
        <del>{price}</del>
        &nbsp;
        {price * (100 - discount) / 100}
        </>
        : price
    }
    &nbsp;рублей</span>
    <button className="card__btn">В корзину</button>
    <span className="card__tags">
        {tags.map(element => <span key={element}>{element}</span>)}
    </span>
    </Link>
}

export default Card;
import "./style.css";

const Card = ({img, name, price}) => {
    return <a className = "card">
    <img src={img} alt="Картинка" className="card__img"/>
    <span className="card__name">{name}</span>
    <span className="card__price">{price} рублей</span>
    <button className="card__btn">В корзину</button>
    </a>
}

export default Card;
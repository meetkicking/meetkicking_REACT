import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { ArrowThroughHeart, ArrowThroughHeartFill, Percent } from "react-bootstrap-icons";

const Card = ({
    img, 
    name, 
    price, 
    _id, 
    discount, 
    tags, 
    likes, 
    setServerGoods
}) => {

    const [isLike, setIsLike] = useState(likes.includes(localStorage.getItem("rockId")));

    const updLike = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsLike(!isLike);
        const token = localStorage.getItem("rockToken");
        fetch(`https://api.react-learning.ru/products/likes/${_id}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(responce => responce.json())
        .then(data => {
            console.log(data);
            setServerGoods(function (old) {
                console.log(old);
                const arr = old.map(element => {
                    if (element._id === _id)
                    {
                        return data;
                    } else {
                        return element;
                    }
                });
                return arr;
            })
        })
    }

    return <Link className = "card" to={`/product/${_id}`}>
    {discount > 0 && <span className="card__discount"><Percent/>{discount}</span>}
    <span className="card__like" onClick={updLike}>
        {isLike ? <ArrowThroughHeartFill/> : <ArrowThroughHeart/>}
    </span>
    {/*<img src={img} alt="Картинка" className="card__img"/>*/}
    <span classname="card__img2" style={{backgroundImage: `url(${img})`}}/>
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
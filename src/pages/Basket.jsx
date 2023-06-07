import { useContext } from "react";
import { Link } from "react-router-dom";

import Ctx from "../context";

const Basket = () => {
    const {basket} =useContext(Ctx);
    const setPrice = ({price, discount, cnt}) => {
        return price * cnt * (1 - discount / 100)
    } 
    return (
        <>
        <h1>Корзина</h1>
        <table>
            <thead>
                <tr>
                    <td>Изображение</td>
                    <td>Название</td>
                    <td>Количество</td>
                    <td>Цена</td>
                    <td>Скидка</td>
                    <td>Цена со скидкой</td>
                </tr>
            </thead>
            <tbody>
                {basket.map(el => <tr key={el.id}>
                    <td> 
                        <img src={el.img} alt={el.name} height="50"/>
                    </td>
                    <td>
                        {el.name}
                    </td>
                    <td>
                        <button>-</button>
                        <span style={{padding: "0 10px"}}>{el.cnt}</span>
                        <button>+</button>
                    </td>
                    <td>{el.price * el.cnt}&nbsp;руб.</td>
                    <td>{el.discount > 0 && `${el.discount}%`}</td>
                    <td></td>
                </tr>)}
            </tbody>
        </table>
        </>
    )
}

export default Basket;
import Card from "../components/Card";
import { useState } from "react";

//g в map - товар
const Catalog = ({goods, setServerGoods}) => {
    const [sort, setSort] = useState(null);

    const filterSt = {
        gridColumnEnd: "span 4",
        display: "flex",
        gap: "20px"
    }

    const SortHandler = (vector) => {
        if (vector === sort) {
            setSort(null);
            setServerGoods(old => [...old]);
        }
        else {
            setSort(vector);
            goods.sort((a, b) => {
                return vector === "up" ? (a.price - b.price) : (b.price - a.price);
            })
        }
    }

    return (
        <div className="container">
        <div style={filterSt}>
            <button style={{background: sort === "up" ? "orange" : "white"}}
            onClick={() => SortHandler("up")}
            >По возрастанию цены</button>
            <button style={{background: sort === "down" ? "orange" : "white"}}
            onClick={() => SortHandler("down")}
            >По убыванию цены</button>
            <button>Новинки</button>
            <button>Скидки</button>
        </div>
        {goods.map(g => <Card 
        key={g._id} 
        {...g} 
        img={g.pictures}
        setServerGoods={setServerGoods}
        />)}
        </div>
    )
}

export default Catalog;
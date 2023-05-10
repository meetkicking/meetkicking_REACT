import { useState } from "react";

import "./style.css"

const Search = ({array, upd}) => {
    // let text = "Bass";

    const [text, setText] = useState("");

    const [quantity, setQuantity] = useState(array.length);

    const [count, updateCount] = useState(0);

    let n = 1;
    const click = () => {
        console.log(n++);
        updateCount(count + 1);
        console.log("count", count);
    }

    const searchByText = (event) => {
        let val = event.target.value;
        setText(val);
        let result = array.filter(element => element.name.toLowerCase().includes(val.toLowerCase()));
        upd(result);
        setQuantity(result.length);
        console.log(result);
    }

    return (
    <div className="search-block">
        <input type="search" className="search" placeholder="Поиск..." value={text} onChange={searchByText}/>
        <button onClick={click}>Bork</button>
        <hr/>
        {/*<div>{text}, {n}, {count}</div>*/}
        <div>По вашему запросу " {text} " найдено {quantity} подходящих товаров</div>
    </div>
    )
}

export default Search;
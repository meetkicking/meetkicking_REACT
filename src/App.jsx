import { useState } from "react";
import Promo from "./components/Promo/Promo";
import Card from "./components/Card";
import {Header, Footer} from "./components/General";
import cardsData from "./assets/data.json";
import Modal from "./components/Modal";
import Search from "./components/Search";

const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия биологических экспериментов, включавших проведение исследований по возможности полётов на геофизических и космических ракетах живых существ, наблюдение за поведением высокоорганизованных животных в условиях таких полётов, а также, изучение сложных явлений в околоземном пространстве."
text = text.match(/[^\s,.]+/g);

const rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while(n--) {
    adds.push({
        text: `${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)}`,
        pic: !!Math.round(Math.random()),
        sizes: sizes[rand(sizes.length)]
    })
}

const App = () => {
    const [goods, setGoods] = useState(cardsData);
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [modalActive, setModalActive] = useState(false);

    return (
<>
    <Header user={user} setUser={setUser} setModalActive={setModalActive}/>
    <div className="container">
        {adds.map((el, index) => <Promo key={index} {...el} type={el.sizes}/>)}
        {/*<Card 
        img={cardsData[0].pictures}
        name={cardsData[0].name}
        price={cardsData[0].price}
        />
        */}
        <Search array={cardsData} upd={setGoods}/>
        {goods.map((el, index) => <Card
        key={index}
        img={el.pictures}
        name={el.name}
        price={el.price}
        />)}
    </div>
    <Footer/>
    <Modal
        active={modalActive}
        setActive={setModalActive}
    />
</>
    )
}

export default App;

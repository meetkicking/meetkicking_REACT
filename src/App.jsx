import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import Ctx from "./context";
import Api from "./api";

import {Header, Footer} from "./components/General";
import Modal from "./components/Modal";
import Search from "./components/Search";

import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Add from "./pages/AddProduct";
import Basket from "./pages/Basket";

const App = () => { 

    //"https://newsapi.org/v2/everything?apiKey=74b7b9c214584eaab09d1b35f0a153ce&q=dogs"

    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [token, setToken] = useState(localStorage.getItem("rockToken"));
    const [userId, setUserId] = useState(localStorage.getItem("rockId"));
    const [text, setText] = useState("");
    const [serverGoods, setServerGoods] = useState([]);
    const [goods, setGoods] = useState(serverGoods);

    const [news, setNews] = useState([]);
    const [api, setApi] = useState(new Api(token));

    let bStore = localStorage.getItem("rockBasket");
    if (bStore) {
        bStore = JSON.parse(bStore);
    } else {
        bStore = [];
    }

    const [basket, setBasket] = useState(bStore);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=животные&sources=lenta&apiKey=74b7b9c214584eaab09d1b35f0a153ce")
        .then(responce => responce.json())
        .then(data => {
            console.log(data);
            setNews(data.articles);
        })
    }, [])

    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        if (token) {
        setApi(new Api(token));
    }
    }, [token])

    useEffect(() => {
        localStorage.setItem("rockBasket", JSON.stringify(basket));
    }, [basket])

    useEffect(() => {
        if (api.token) {
            api.getProduct()
            .then(data => {
            console.log(data);
            //const result = data.products.filter(el => el.tags.includes("df"));
            setServerGoods(data.products);
        })
        }
    }, [api.token])

    useEffect(() => {
        if (!goods.length) {
            console.log("=)");
            setGoods(serverGoods);
        }
    }, [serverGoods])

    //useEffect(() => {
    //    console.log("hello!");
    //})

    //useEffect(() => {
    //    console.log("Модалка изменилась");
    //}, [modalActive])

     useEffect(() => {
        //console.log("Change User");
        if (user) {
            setToken(localStorage.getItem("rockToken"));
            setUserId(localStorage.getItem("rockId"));
        }
        else {
            setToken("");
            setUserId("");
        }
        console.log("u", user);
        console.log("t", token);
     }, [user])

    return (
<Ctx.Provider value={{
    goods, 
    setGoods,
    setServerGoods,
    news,
    text,
    setText,
    userId,
    token,
    api,
    basket,
    setBasket

}}>
    <Header user={user} setModalActive={setModalActive} serverGoods={serverGoods}/>
    <main>

    <Search array={serverGoods} />

    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/catalog" element={<Catalog 
        setServerGoods={setServerGoods}
        />}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/favorites" element={<Favorites 
        goods={goods} 
        userId={userId}
        setServerGoods={setServerGoods}
        />}/>
        <Route path="/draft" element={<Draft/>}/>
        <Route path="/profile" element={<Profile user={user} setUser={setUser} color="yellow"/>}/>
        <Route path="/product/:id" element={<Product token={token}/>}/>
        <Route path="/basket" element={<Basket/>}/>
    </Routes>
    
    </main>
    <Footer/>
    <Modal
        active={modalActive}
        setActive={setModalActive}
        setUser={setUser}
    />
</Ctx.Provider>
    )
}

export default App;

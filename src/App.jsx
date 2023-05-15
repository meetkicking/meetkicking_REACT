import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";

import {Header, Footer} from "./components/General";
import Modal from "./components/Modal";
import Search from "./components/Search";

import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";

const App = () => { 
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [token, setToken] = useState(localStorage.getItem("rockToken"));
    const [serverGoods, setServerGoods] = useState([]);
    const [goods, setGoods] = useState(serverGoods);

    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        if (token) {
        fetch("https://api.react-learning.ru/products", {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(responce => responce.json())
        .then(data => {
            console.log(data);
            setServerGoods(data.products); 
        })
    }
    }, [token])

    useEffect(() => {
        console.log("отметка");
        setGoods(serverGoods);
    }, [serverGoods])

    useEffect(() => {
        console.log("hello!");
    })

    //useEffect(() => {
    //    console.log("Модалка изменилась");
    //}, [modalActive])

     useEffect(() => {
        console.log("Change User");
        if (user) {
            setToken(localStorage.getItem("rockToken"));
        }
        else {
            setToken("");
        }
        console.log("u", user);
        console.log("t", token);
     }, [user])

    return (
<>
    <Header user={user} setModalActive={setModalActive}/>
    <main>
    <Search array={[]} upd={() => {}}/>

    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/draft" element={<Draft/>}/>
        <Route path="/profile" element={<Profile user={user} setUser={setUser} color="yellow"/>}/>
    </Routes>
    
    </main>
    <Footer/>
    <Modal
        active={modalActive}
        setActive={setModalActive}
        setUser={setUser}
    />
</>
    )
}

export default App;

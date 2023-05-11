import { useState } from "react";
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
    const [modalActive, setModalActive] = useState(false);
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

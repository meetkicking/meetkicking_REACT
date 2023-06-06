import { useState, useContext } from "react";
import "./style.css";
import Ctx from "../../context";

const Modal = ({active, setActive, setUser}) => {
    const [auth, setAuth] = useState(true);

    //pwr-password
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [testPwd, setTestPwd] = useState("");

    const { api } = useContext(Ctx);

    const testAccess = {
        color: pwd === testPwd ? "forestgreen" : "crimson",
    }

    const switchAuth = (event) => {
        event.preventDefault();
        setAuth(!auth);
        clearForm();
    }

    const clearForm = () => {
        setName("");
        setEmail("");
        setPwd("");
        setTestPwd("");
    }

    const sendForm = async (event) => {
        event.preventDefault();
        let body = {
            email: email,
            password: pwd,
        }
        if (!auth) {
            body.name = name;
            body.group = "group-12";
        }

        let data = await (auth ? api.auth(body) : api.reg(body))
        if (!data.err) {
            if (!auth) {
                delete body.name;
                delete body.group;
                let dataLog = await api.auth(body);
                if (!dataLog.err) {
                    localStorage.setItem("rockUser", dataLog.data.name);
                    localStorage.setItem("rockToken", dataLog.token);
                    localStorage.setItem("rockId", dataLog.data._id);
                    clearForm();
                    setActive(false);
                    setUser(dataLog.data.name);
                }
            }
            else {
                    if (!data.err) {
                        localStorage.setItem("rockUser", data.data.name);
                        localStorage.setItem("rockToken", data.token);
                        localStorage.setItem("rockId", data.data._id);
                        clearForm();
                        setActive(false);
                        setUser(data.data.name);
                }
            }
        }
    }

    return (
        <div
        className="modal-wrapper"
        style={{display: active ? "flex" : "none"}}
        >
            <div className="my-modal">
                <button onClick={() => setActive(false)}>Закрыть окно</button>
                <h3>Авторизация</h3>
                <form onSubmit={sendForm}>
                    {!auth && <label>
                        Имя пользователя
                        <input type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}/>
                    </label>}
                    <label>
                        Электронный адрес
                        <input type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/>
                    </label>
                    <label>
                        Пароль
                        <input type="password"
                        value={pwd}
                        onChange={(event) => setPwd(event.target.value)}/>
                    </label>
                    {!auth && <label>
                        Повторить пароль
                        <input type="password"
                        value={testPwd}
                        onChange={(event) => setTestPwd(event.target.value)}
                        style={testAccess}
                        />
                    </label>}
                    <div className="modal-ctl">
                    <button 
                    className="modal-btn"
                    disabled={!auth && (!pwd || pwd !== testPwd)}
                    >
                        {auth ? "Войти" : "Создать аккаунт"}
                        </button>
                    <a 
                    href=""
                    className="modal-link"
                    onClick={switchAuth}
                    >
                        {auth ? "Регистрация" : "Войти"}
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;
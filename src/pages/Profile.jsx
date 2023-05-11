import { BoxArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, color, setUser }) => {
    const navigate = useNavigate();

    const captionStyle = {
        fontWeight: "bold",
        color: color,
    }

    const logOut = (event) => {
        event.preventDefault();
        setUser("");
        localStorage.removeItem("rockUser");
        navigate("/");
        //setModalActive(true);
    }

    return (
        <>
            <h1>Личный кабинет</h1>
            <div>
                Добро пожаловать,&nbsp;
                <span style={captionStyle}>{user}</span>
                !
            </div>
            <a href="" onClick={logOut} title="Выйти">
                <BoxArrowLeft/>
            </a>
        </>
    )
}

export default Profile;
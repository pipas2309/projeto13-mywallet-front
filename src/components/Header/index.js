//Libs
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Contexts
import UserContext from "../../contexts/UserContext";

//Media and CSS
import { Container, Title, User } from "./style";


export default function Header () {
    const { user } = useContext(UserContext);
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    
    return (
        <Container>
            <Title>TrackIt</Title>
            <User onClick={() => setShow(!show)} visible={show}>
                <img src={user.image} alt='Foto do Usuário' />
                <button onClick={() => {
                    localStorage.removeItem("user");
                    navigate('/');
                }}>
                    Deslogar
                </button>
            </User>
        </Container>
    );
}
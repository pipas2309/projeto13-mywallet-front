//Libs
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Contexts
import UserContext from "../../contexts/UserContext";

//Media and CSS
import { Container, Title, User } from "./style";
import exit from '../../media/exit.png';


export default function Header () {
    const { user } = useContext(UserContext);
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    
    function logout() {
        const check = confirm("Desaja realmente sair?");

        if(check) {
            localStorage.removeItem("user");
            navigate('/');
        }
    }

    return (
        <Container>
            <Title>{`Olá, ${user.name}`}</Title>
            <User onClick={() => setShow(!show)} visible={show}>
                <img src={exit} alt='Sair da conta' onClick={logout}/>
            </User>
        </Container>
    );
}
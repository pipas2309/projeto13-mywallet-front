//Libs
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//Contexts
import UserContext from "../../contexts/UserContext";

//Media and CSS
import { Container, Image, SideButton } from "./style";
import plus from '../../media/plus.png';
import minus from '../../media/minus.png';


export default function Footer () {
    const { setNovaEntrada } = useContext(UserContext);

    const navigate = useNavigate()

    return (
        <Container>

            <SideButton onClick={() => {
                setNovaEntrada('plus');
                navigate('/nova-movimentacao');
                }}>
                <Image src={plus} alt="Credito" />
                <p>Nova entrada</p>
            </SideButton>
            <SideButton onClick={() => {
                setNovaEntrada('minus');
                navigate('/nova-movimentacao');
                }}>
                <Image src={minus} alt="Debito" />
                <p>Nova saída</p>
            </SideButton>
        </Container>
    );
}


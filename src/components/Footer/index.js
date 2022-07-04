//Libs
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

//Contexts
import UserContext from "../../contexts/UserContext";

//Media and CSS
import { Container, MiddleButton, SideButton } from "./style";
import 'react-circular-progressbar/dist/styles.css'

export default function Footer () {
    const { percentage } = useContext(UserContext);

    const navigate = useNavigate()

    return (
        <Container>

            <SideButton onClick={() => navigate('/habitos')}><p>Hábitos</p></SideButton>
            <MiddleButton onClick={() => navigate('/hoje')}>
                <CircularProgressbar
                    value={percentage}
                    text="Hoje"
                    background
                    strokeWidth="8"
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        width: "20px"
                    })}
                />
            </MiddleButton>
            <SideButton onClick={() => navigate('/historico')}><p>Histórico</p></SideButton>
        </Container>
    );
}


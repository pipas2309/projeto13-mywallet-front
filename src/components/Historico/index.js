//Libs
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Calendar from 'react-calendar';

//Contexts
import TokenContext from "../../contexts/TokenContext";

//Components
import Footer from "../Footer";
import Header from "../Header";

//Media and CSS
import { Container, Title } from "./style";
import 'react-calendar/dist/Calendar.css';

export default function Historico() {
    
    const URL_API_HISTORICO = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily';
    const { token } = useContext(TokenContext);
        const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    const navigate = useNavigate()
    const [habitos, setHabitos] = useState();
    const [value, onChange] = useState(new Date());


    useEffect(() => {
        const promise = axios.get(URL_API_HISTORICO, config);
        promise.then(({data}) => {
            console.log(data)
            setHabitos(data);
        });
        promise.catch(() => {
            navigate('/');
        });

    },[])
    console.log(habitos);
    
        return (
            <>
                <Header />
                    <Container>
                        <Title>Hitórico</Title>
                        <Calendar calendarType="US" onChange={onChange} value={value} />                
                        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                    </Container>
                <Footer />
            </>
        );
}
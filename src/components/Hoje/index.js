//Libs
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'dayjs/locale/pt-br';
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import dayjs from "dayjs";

//Contexts
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";

//Components
import Header from "../Header";
import Footer from "../Footer";
import Habito from "../Habito";

//Media and CSS
import { Container, NavTitle } from "./style";


export default function Hoje () {
    const URL_API_LISTA_HABITOS_HOJE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
    const { percentage, setPercentage } = useContext(UserContext);
    const { token } = useContext(TokenContext);
        const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const navigate = useNavigate()
    const [meusHabitos, setMeusHabitos] = useState();

    useEffect(() => {
        const promise = axios.get(URL_API_LISTA_HABITOS_HOJE, config);
        promise.then(({data}) => {
            setMeusHabitos(data);
            contaProgresso(data);
        });
        promise.catch((resp) => {
            navigate('/');
        });

    },[])
    
    
    //Logica check
    function clica(index) {

        const atualizando = [...meusHabitos];
        const habitosAtualizados = atualizando[index];

        if (habitosAtualizados.done) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitosAtualizados.id}/uncheck`;
            const promise = axios.post(URL, {}, config);
            promise.then(resp => console.log('Desmarcado'));
            promise.catch(resp => console.log(resp));
            habitosAtualizados.currentSequence -= 1;
        } else {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitosAtualizados.id}/check`;
            const promise = axios.post(URL, {}, config);
            promise.then(resp => console.log('Marcado'));
            promise.catch(resp => console.log(resp));
            habitosAtualizados.currentSequence += 1;
        }

        habitosAtualizados.done = !habitosAtualizados.done;

        contaProgresso(atualizando);
        setMeusHabitos(atualizando);
    }


    function contaProgresso(habitos) {
        const habitosConcluidos = habitos.filter((value) => value.done === true).length;
        const progresso = Math.ceil((habitosConcluidos / habitos.length) * 100);
        if(isNaN(progresso)) {
            setPercentage(0)
            return;
        }
        setPercentage(progresso);
    }   

    function tenhoHabitos() {
        if(meusHabitos) {
            if(meusHabitos.length === 0) {
                return (
                    <p>Você não tem nenhum hábito cadastrado para a {aux2}. <br />
                    Crie um hábito para fazer hoje e comece a trackear!
                    </p>
                );
            }
            return (
                meusHabitos.map((value, index) => <Habito 
                key={value.id}
                habito={value}
                index={index}
                clica={clica}
                />)
            )
            ;
        } else {
            return (
            <span>
                <ThreeDots color="#126BA5" height={80} width={80} />
            </span>
            );
        }
    }
    
    function porcentagem() {
        if(percentage === 0 || isNaN(percentage)) {
            return (<p>Nenhum hábito concluído ainda</p>)
        } else {
            return (<p>{percentage}% dos hábitos concluídos</p>)
        }
    }

    const aux = dayjs().locale('pt-br').format('dddd, DD/MM');
    const aux2 = dayjs().locale('pt-br').format('dddd');
    const day = aux.charAt(0).toUpperCase() + aux.slice(1);
    
    const listaHabitos = tenhoHabitos();
    const minhaPorcentagem = porcentagem();

    return (
        <>
            
            <Container>
                <Header />
                <NavTitle percentage={percentage}>
                    <h3>{day}</h3>
                    {minhaPorcentagem}
                </NavTitle>
                {listaHabitos}
                <Footer />
            </Container>
            
        </>
    );
}


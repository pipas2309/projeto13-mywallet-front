//Libs
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

//Contexts
import TokenContext from "../../contexts/TokenContext";

//Components
import Footer from "../Footer";
import Header from "../Header";
import HabitosConfig from "../HabitosConfig";
import HabitoNovo from "../HabitoNovo";

//Media and CSS
import { Container, NavTitle } from "./style";
import plus from '../../media/plus.png';


export default function Habitos() {
    
    const URL_API_LISTA_HABITOS = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const { token } = useContext(TokenContext);
        const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    const navigate = useNavigate()
    const [habitos, setHabitos] = useState();
    const [criar, setCriar] = useState(false);
    const [troca, setTroca] = useState(false);
    //const [deletar, setDeletar] = useState(false);

    useEffect(() => {
        const promise = axios.get(URL_API_LISTA_HABITOS, config);
        promise.then(({data}) => {
            setHabitos(data);
        });
        promise.catch(() => {
            navigate('/');
        });

    },[troca])
    
    function deletar(index) {
        const deletando = habitos[index].id;
        const confirma = window.confirm(`Tem certeza que quer deletar o hábito "${habitos[index].name}" ?`);
        if(confirma) {
            const URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${deletando}`;
            const promise = axios.delete(URL_DELETE, config);
            promise.then((resp) => {
                console.log(resp);
                setTroca(!troca)
            })
            promise.catch((resp) => {
                console.log(resp)
            })
        }
    }

    function criarHabito(boolean) {
        if(boolean) {
            return (
                <HabitoNovo setCriar={setCriar} config={config} setTroca={setTroca} troca={troca} />
            );
        } else {
            return (<></>);
        }        
    }
    
    function listarHabitos() {
        if(habitos) {
            if(habitos.length === 0) {
                return (
                    <p>Você não tem nenhum hábito cadastrado ainda. <br />
                    Adicione um hábito para começar a trackear!
                    </p>
                );
            }
            return (
                habitos.map((value, index) => 
                <HabitosConfig deletar={deletar} habito={value} index={index} />
                ));
        } else {
            return (
            <span>
                <ThreeDots color="#126BA5" height={80} width={80} />
            </span>
            );
        }
    }
    
    const novoHabito = criarHabito(criar);
    const meusHabitos = listarHabitos();
    
        return (
            <>
                <Header />
                <Container>                    
                    <NavTitle>
                        <h3>Meus hábitos</h3>
                        <div onClick={() => setCriar(!criar)}>
                            <img src={plus} alt='criar' />
                        </div>
                    </NavTitle>
                    {novoHabito}
                    {meusHabitos}                
                </Container>
                <Footer />
            </>
        );
}
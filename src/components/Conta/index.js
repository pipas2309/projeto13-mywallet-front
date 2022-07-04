//Libs
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

//Contexts
import TokenContext from "../../contexts/TokenContext";
//import UserContext from "../../contexts/UserContext";

//Components
import Header from "../Header";
import Footer from "../Footer";
import Transaction from "../Transaction";

//Media and CSS
import { Container, Balance } from "./style";


export default function Hoje () {
    const URL_API_ALL_TRANSACTIONS = 'https://my-wallet-backend-p13.herokuapp.com/account/transactions';
    const URL_API_BALANCE = 'https://my-wallet-backend-p13.herokuapp.com/account/balance';

    //const { novaEntrada, setNovaEntrada } = useContext(UserContext);
    const { token } = useContext(TokenContext);
        console.log(token.toString())
        const config = {
        headers: {
            "Authorization": `Bearer ${token.toString()}`
        }
    }
    const navigate = useNavigate()
    const [minhasTransacoes, setMinhasTransacoes] = useState();
    const [balance, setBalance] = useState();

    useEffect(() => {
        const promise = axios.get(URL_API_ALL_TRANSACTIONS, config);
        promise.then(({data}) => {
            console.log(data, 'tra')
            setMinhasTransacoes(data);
        });
        promise.catch((resp) => {
            //navigate('/');
        });

    },[])

    useEffect(() => {
        const promise = axios.get(URL_API_BALANCE, config);
        promise.then(({data}) => {
            console.log(data.balance, 'balance')
            setBalance(data.balance);
        });
        promise.catch((resp) => {
            //navigate('/');
        });

    },[])
    
    
    /* função de clicar
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
    } */

    function tenhoTransacoes() {
        if(minhasTransacoes) {
            if(minhasTransacoes.length === 0) {
                return (
                    <p>Não há registros de entrada ou saída</p>
                );
            }
            return (
                minhasTransacoes.map((value, index) => <Transaction 
                key={value._id}
                amount={value.amount}
                description={value.description}
                data={value.data}
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
        
    const listaTransacoes = tenhoTransacoes();

    return (
        <>
            <Container>
                <Header />
                <Transaction>
                    {listaTransacoes}
                    <Balance>SALDO <p>{balance}</p></Balance>
                </Transaction>
                <Footer />
            </Container>            
        </>
    );
}


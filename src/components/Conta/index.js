//Libs
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

//Contexts
import UserContext from "../../contexts/UserContext";

//Components
import Header from "../Header";
import Footer from "../Footer";
import Transaction from "../Transaction";

//Media and CSS
import { Container, Balance, TransactionS, List } from "./style";


export default function Hoje () {
    const URL_API_ALL_TRANSACTIONS = 'https://my-wallet-backend-p13.herokuapp.com/account/transactions';
    const URL_API_BALANCE = 'https://my-wallet-backend-p13.herokuapp.com/account/balance';
    //const URL_API_ALL_TRANSACTIONS = 'http://localhost:5000/account/transactions';
    //const URL_API_BALANCE = 'http://localhost:5000/account/balance';


    
    const { user } = useContext(UserContext);
    
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    const navigate = useNavigate()
    const [minhasTransacoes, setMinhasTransacoes] = useState();
    const [balance, setBalance] = useState();

    useEffect(() => {
        const promise = axios.get(URL_API_ALL_TRANSACTIONS, config);
        const secondPromise = axios.get(URL_API_BALANCE, config);

        promise.then(({data}) => {
            setMinhasTransacoes(data);
        });
        promise.catch((resp) => {
            navigate('/');
        });
        
        secondPromise.then(({data}) => {
            setBalance(data.balance);
        });
        secondPromise.catch((resp) => {
            navigate('/');
        });

    },[])
        
    function tenhoTransacoes () {
        if(minhasTransacoes) {
            console.log(minhasTransacoes, 'minhas')
            if(minhasTransacoes.length === 0) {
                return (
                    <p>Não há registros de entrada ou saída</p>
                );
            }
                return (
                    minhasTransacoes.map((value) => {
                    return (
                    <Transaction 
                        key={value._id}
                        amount={value.amount}
                        description={value.description}
                        date={value.date}
                    />)})
                )
            

        } else {
            return (
            <span>
                <ThreeDots color="#126BA5" height={80} width={80} />
            </span>
            );
        }
    }

    let valor = 0;
    if(isNaN(balance)){
        for(let i = 0; i < minhasTransacoes.length; i++) {
            valor += Number(minhasTransacoes[i].amount)
        }
    } else { valor = balance}

    const brl = new Intl.NumberFormat("pt-BR", {style: "currency", "currency":"BRL"}).format(valor);

    const listaTransacoes = tenhoTransacoes();

    return (
        <>
            <Container>
                <Header />
                <TransactionS> 
                    <List>
                        {listaTransacoes}
                    </List>                
                    <Balance>SALDO <p>{brl}</p></Balance>
                </TransactionS>
                <Footer />
            </Container>            
        </>
    );
}


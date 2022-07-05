//Libs
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

//Media and CSS
import { Button, Container, Input, Title } from "./style";

//Contexts
import UserContext from "../../contexts/UserContext";


export default function EntradaSaida() {
    const URL_API_POST_TRANSACTION = 'https://my-wallet-backend-p13.herokuapp.com/account/transactions';
    //const URL_API_POST_TRANSACTION = 'http://localhost:5000/account/transactions';
    
    //VARIAVEIS DE CONTEXTO
    const { user, novaEntrada } = useContext(UserContext);

    let type = '';

    if(novaEntrada === 'plus') {
        type = 'entrada';
    } else {
        type = 'saída';
    }

    //VARIAVEIS DE ESTADO
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [carregando, setCarregando] = useState(false);
    
    //FUNÇÕES
    const navigate = useNavigate();

    //FUNCÇÃO QUANDO DER 'SUBMIT' NO FORMULÁRIO
    async function logar (e) {
        e.preventDefault();
        let usuario = {
            amount,
            description
        };
        
        if(novaEntrada === 'minus') {
            usuario = {...usuario, amount: Number(-amount)}
        }
        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }
            const promise = await axios.post(URL_API_POST_TRANSACTION, usuario, config);

            navigate('/conta');     
        } catch (error) {
            alert(error.response.data)
            setCarregando(false);
            navigate('/conta');
        }
    };
    

    //RENDER
    return (
        <Container>
            <Title>Nova {type}</Title>
            <form onSubmit={(e) => {
                logar(e);
                setCarregando(true)
                }}>

                {carregando ? //Ternário para Botão
                <>
                    <Input type='number' onChange={(e) => setAmount(e.target.value)} value={amount} placeholder="Valor" disabled />
                    <Input type='text' onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Descrição" disabled />
                    <Button disabled type="submit">
                        <ThreeDots color="#FFF" height={80} width={80} />
                    </Button>
                </>
                    
                :
                <>
                    <Input type='number' onChange={(e) => setAmount(e.target.value)} value={amount} placeholder="Valor" required />
                    <Input type='text' onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Descrição" required />
                    <Button type="submit">Salvar {type}</Button>
                </>
                    
                }
            </form>
        </Container>
    );
}
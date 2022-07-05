//Libs
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

//Media and CSS
import { Button, Container, Input, Title } from "./style";

//Contexts
import UserContext from "../../contexts/UserContext";

//Components and functions
import local from "../LocalStorage";


export default function Login() {
    //const URL_API_LOGIN = 'https://my-wallet-backend-p13.herokuapp.com/auth/sign-in';
    const URL_API_LOGIN = 'http://localhost:5000/auth/sign-in';
    
    //VARIAVEIS DE CONTEXTO
    const { setUser } = useContext(UserContext);

    //VARIAVEIS DE ESTADO
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [carregando, setCarregando] = useState(false);
    
    //FUNÇÕES
    const userLocal = local();
    const navigate = useNavigate();

    //CASO EXISTA LOCAL STORAGE ELE CARREGA DIRETO / PERSISTENCIA DO LOGIN
    if(userLocal) {
        if(!carregando) { //ICONE DE CARREGANDO
            setCarregando(true);
        }
        const xxx = axios.post(URL_API_LOGIN,userLocal);
        xxx.then((resp) => {
            //setToken(resp.data.token);
            setUser(resp.data);
            navigate('/conta');
        })
        //CASO O LOCAL STORAGE NÃO FUNCIONE
        xxx.catch(() => {
            localStorage.removeItem("user");
            setCarregando(false)
        })
    };

    //FUNCÇÃO QUANDO DER 'SUBMIT' NO FORMULÁRIO
    async function logar (e) {
        e.preventDefault();
        const usuario = {
            email,
            password
        };
        
        try {
            const xxx = await axios.post(URL_API_LOGIN, usuario);

            setUser(xxx.data);  
            navigate('/conta');     
        } catch (error) {
            alert(error.response.data)
            setCarregando(false)
        }
    };
    

    //RENDER
    return (
        <Container>
            <Title>MyWallet</Title>
            <form onSubmit={(e) => {
                logar(e);
                setCarregando(true)
                }}>

                {carregando ? //Ternário para Botão
                <>
                    <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mail" disabled />
                    <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Senha" disabled />
                    <Button disabled type="submit">
                        <ThreeDots color="#FFF" height={80} width={80} />
                    </Button>
                </>
                    
                :
                <>
                    <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mail" required />
                    <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Senha" required />
                    <Button type="submit">Entrar</Button>
                </>
                    
                }
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}
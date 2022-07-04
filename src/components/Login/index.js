//Libs
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

//Media and CSS
import { Button, Container, Input, Title } from "./style";

//Contexts
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";

//Components and functions
import local from "../LocalStorage";


export default function Login() {
    const URL_API_LOGIN = 'https://my-wallet-backend-p13.herokuapp.com/auth/sign-in';
    
    //VARIAVEIS DE CONTEXTO
    const { setUser } = useContext(UserContext);
    const { setToken } = useContext(TokenContext);

    //VARIAVEIS DE ESTADO
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [pegaToken, setPegaToken] = useState(false);
    const [usuario, setUsuario] = useState({});
    
    //FUNÇÕES
    const userLocal = local();
    const navigate = useNavigate();

    //CASO EXISTA LOCAL STORAGE ELE CARREGA DIRETO / PERSISTENCIA DO LOGIN
    if(userLocal) {
        if(!carregando) { //ICONE DE CARREGANDO
            setCarregando(true);
        }
        const promise = axios.post(URL_API_LOGIN,userLocal);
        promise.then((resp) => {
            setToken(resp.data.token);
            setUser(resp.data);
            navigate('/conta');
        })
        //CASO O LOCAL STORAGE NÃO FUNCIONE
        promise.catch(() => {
            localStorage.removeItem("user");
            setCarregando(false)
        })
    };

    //FUNCÇÃO QUANDO DER 'SUBMIT' NO FORMULÁRIO
    function logar (e) {
        e.preventDefault();
        const xxx = {
            email,
            password
        };
        setUsuario(xxx)
        setPegaToken(true); /*
        const promise = await axios.post(URL_API_LOGIN, usuario);
        
        const feito = promise.data
        if(feito.token) {
            setPegaToken(true);
        }
        navigate('/conta');
        setUser(feito)
        
        promise.then((resp) => {
            navigate('/conta');
            local(true,usuario);
            setToken(resp.data.token);
            setUser(resp.data);
            
            
        })
        promise.catch((resp) => {
            alert(resp.response.data.message)
            setCarregando(false)
        })*/
    };
    
    //final
    useEffect(() => {    
        console.log('entrei no pega logo')

        const promise = axios.post(URL_API_LOGIN, usuario);
        promise.then((resp) => {
            navigate('/conta');
            local(true,usuario);
            
            setUser(resp.data);
            setToken(resp.data.token);
            
        })
    },[pegaToken])


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
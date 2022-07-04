//Libs
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Media e CSS
import { Button, Container, Input, Title } from "./style";

export default function Cadastro() {
    

    const URL_CADASTRO_API = "https://my-wallet-backend-p13.herokuapp.com/auth/sign-up";
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);

    const notify = () => toast("As senhas precisam ser iguais!")

    function cadastrar(e) {
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const checkPassword = e.target[3].value;

        if(password !== checkPassword) {
            setCarregando(false)
            notify();
            return;
        }

        const usuario = {
            username,
            email,
            password
        };

        const promise = axios.post(URL_CADASTRO_API, usuario);

        promise.then((e) => {
            navigate('/');
        })
        promise.catch((e) => {
            alert(`${e.response.data.message}\n${e.response.data.details}`);
            setCarregando(false)
        });
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <form onSubmit={(e) => {
                e.preventDefault(cadastrar(e));
                setCarregando(true)
                }}>
                {carregando ?
                    <>
                        <Input type='name' placeholder="Nome" disabled />
                        <Input type='email' placeholder="E-mail" disabled />
                        <Input type='password' placeholder="Senha" disabled />
                        <Input type='password' placeholder="Confirme a senha" disabled />
                        <Button disabled type="submit">
                            <ThreeDots color="#FFF" height={80} width={80} />
                        </Button>
                    </>
                :   
                    <>
                        <Input type='name' placeholder="Nome" required />
                        <Input type='email' placeholder="E-mail" required />
                        <Input type='password' placeholder="Senha" required />
                        <Input type='password' placeholder="Confirme a senha" required />
                        <Button type="submit">Cadastrar</Button>
                    </>
                }
                
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
            
        </Container>
    );
}
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8C11BE;
    padding-bottom: 150px;
    
    
    form {
        width: 326px;
        display: flex;
        flex-direction: column;
        margin-top: 32px;
    }

    p {
        font-size: 14px;
        line-height: 17px;
        color: #fff;
        text-decoration: underline;
        text-align: center;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 58px;
    margin-bottom: 7px;
    border-radius: 5px;
    background-color: #fff;
    padding-left: 11px;
    font-size: 20px;
    color: black;

    ::placeholder {
        color: #000000;
    }
`;

const Button = styled.button`
    width: 326px;
    height: 45px;
    margin-bottom: 25px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #A328D6;
    border-radius: 4px;
    border: none;
    transition: 0.2s;

    &:active {
        font-size: 25px;
        background-color: #A328D6;
    }
`;

const Title = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #FFF;
    line-height: 50px;
`;


export {
    Input,
    Button,
    Title,
    Container,
}
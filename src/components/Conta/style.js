import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vmax;
    padding: 78px 25px 143px 25px;
    background-color: #8C11BE;

    p {
        color: #868686;
    }
    
    span {
        display: flex;
        justify-content: center;
    }
`;

const Balance = styled.div`
    font-weight: 700;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 10px 15px;

    p {
        color: #03AC00;
        font-size: 17px;
        font-weight: 400;
    }
`;

const Transaction = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 78px 25px 143px 25px;
    background-color: #8C11BE;
`;


export {
    Container,
    Balance,
    Transaction
};
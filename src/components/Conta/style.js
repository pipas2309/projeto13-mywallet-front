import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 78px 25px 143px 25px;
    background-color: #8C11BE;

    p {
        color: #fff;
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
    padding: 0 0px 10px 0px;

    p {
        color: #03AC00;
        font-size: 17px;
        font-weight: 400;
    }
`;

const TransactionS = styled.div`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 25px 10px 25px;
`;

export {
    Container,
    Balance,
    TransactionS
};
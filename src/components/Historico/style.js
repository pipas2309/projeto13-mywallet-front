import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height:100vmax ;
    background-color: #e5e5e5;
    padding: 70px 18px 80px 18px;

    span {
        display: flex;
        justify-content: center;
    }

    p {
        margin-top: 10px;
    }
`;

const Title = styled.h3`
    color: #126BA5;
    font-size: 23px;
    line-height: 29px;
    margin: 25px 0;
`;




export {
    Container,
    Title
};
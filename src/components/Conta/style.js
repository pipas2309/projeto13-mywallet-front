import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vmax;
    background-color: #e5e5e5;
    padding: 70px 18px 80px 18px;


    span {
        display: flex;
        justify-content: center;
    }
`;

const NavTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 25px 0;

    h3{
        color: #126BA5;
        font-size: 23px;
        line-height: 29px;
    }

    p {
        color: ${props => props.percentage ? '#8FC549' : '#BABABA'};
        font-size: 18px;
        line-height: 22px;
    }
`;


export {
    Container,
    NavTitle,
};
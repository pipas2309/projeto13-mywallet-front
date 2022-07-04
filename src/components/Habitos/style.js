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
`;

const NavTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;

    h3{
        color: #126BA5;
        font-size: 23px;
        line-height: 29px;
    }

    div {
        width: 40px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #52B6FF;
        border-radius: 5px;
    }

    img {
        width: 16px;
        height: auto;
    }
`;

export {
    Container,
    NavTitle
};
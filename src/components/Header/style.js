import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Title = styled.h1`
    font-family: 'Playball', cursive;
    font-size: 39px;
    line-height: 49px;
    color: #fff;
`;

const User = styled.div`
display: flex;
align-items: center;
position: relative;
cursor: pointer;

img {
    width: 51px;
    height: 51px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 1;
}

button {
    width: 70px;
    height: 23px;
    position: absolute;
    top: 12px;
    right: ${props => props.visible ? '70px' : '-88px'};
    transition: 0.3s;
    background-color: #52B6FF;
    border: none;
    border-radius: 9px;
    cursor: pointer;
}
`;

export {
    Container,
    Title,
    User
}
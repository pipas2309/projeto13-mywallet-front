import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
`;

const MiddleButton = styled.div`
    background-color: #52b6ff;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 42px;

    p {
        color: #fff;
        font-size: 18px;
        line-height: 22px;
    }
`;

const SideButton = styled.div`
    p {
        color: #52b6ff;
        font-size: 18px;
        line-height: 22px;
    }
`;

export {
    Container,
    MiddleButton,
    SideButton
}
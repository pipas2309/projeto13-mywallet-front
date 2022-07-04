import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 143px;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
`;

const Image = styled.img`
    color: #fff;
    font-size: 15px;
`;

const SideButton = styled.div`
    background-color: #A328D6;
    border-radius: 5px;
    padding: 10px;
    width: 155px;
    height: 114px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
        color: #fff;
        font-size: 17px;
        line-height: 20px;
        word-break: break-all;
        text-overflow: ellipsis;
    }
`;

export {
    Container,
    Image,
    SideButton
}
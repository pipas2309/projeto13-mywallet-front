import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 78px;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Title = styled.h1`
    font-size: 26px;
    line-height: 31px;
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
`;

export {
    Container,
    Title,
    User
}
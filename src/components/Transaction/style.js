import styled from "styled-components";

const Habits = styled.div`
    max-width: 340px;
    min-height: 94px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 13px;
    border-radius: 5px;
    background-color: #fff;


`;
const Data = styled.p`
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`;

const AmountP = styled.p`
    font-size: 16px;
    line-height: 19px;
    color: #03AC00;
`;

const AmountM = styled.p`
    font-size: 16px;
    line-height: 19px;
    color: #C70000;
`;


export {
    Habits,
    Data,
    Description,
    AmountP,
    AmountM
};
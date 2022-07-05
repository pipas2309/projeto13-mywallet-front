import styled from "styled-components";

const Movimentation = styled.div`
    max-width: 100%;
    min-height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 0 12px 0 0px;

    div {
        display: flex;
        margin-bottom: 0;
        
    }
`
const Data = styled.p`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 3px;
`;

const Description = styled.p`
    font-size: 16px;
    max-width: 150px;
    line-height: 19px;
    color: #000000;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const AmountP = styled.p`
    font-size: 16px;
    line-height: 19px;
    max-width: 120px;
    text-align: end;
    color: #03AC00;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const AmountM = styled.p`
    font-size: 16px;
    max-width: 120px;
    line-height: 19px;
    text-align: end;
    color: #C70000;
    text-overflow: ellipsis;
    overflow: hidden;
`;


export {
    Movimentation,
    Data,
    Description,
    AmountP,
    AmountM
};
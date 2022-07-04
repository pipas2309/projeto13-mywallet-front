import styled from "styled-components";

const Habits = styled.div`
    max-width: 340px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    padding: 12px 13px;
    border-radius: 5px;
    background-color: #fff;

    input {
        width: 303px;
        height: 45px;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        padding-left: 11px;
        color: #666666;
        font-size: 20px;

        &::placeholder {
            color: #DBDBDB;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    margin-left: auto;
    button {
        width: 84px;
        height: 35px;
        border-radius: 4.7px;
        background-color: #fff;
        color: #52B6FF;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:nth-child(2) {
        background-color: #52B6FF;
        color: #fff;
        margin-left: 3px;
    }

`;

const Days = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
        width: 30px;
        height: 30px;
        background-color: ${props => props.select ? '#CFCFCF' : '#FFFFFF'};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 4px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
    }

    p {
        font-size: 21px;
        line-height: 25px;
        color: ${props => props.select ? '#FFFFFF' : '#DBDBDB'};
    }

    div.check {
        width: 30px;
        height: 30px;
        background-color: #CFCFCF;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 4px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
    }

    .check p {
        font-size: 21px;
        line-height: 25px;
        color: #FFFFFF;
    }
`;

export {
    Habits,
    Buttons,
    Days
};
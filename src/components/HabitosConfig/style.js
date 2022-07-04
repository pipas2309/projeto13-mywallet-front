import styled from "styled-components";

const Habits = styled.div`
    max-width: 340px;
    min-height: 91px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    padding: 12px 13px;
    border-radius: 5px;
    background-color: #fff;
`;

const Trash = styled.img`
    width: 15px;
    height: auto;
`;

const Details = styled.div`
    color: #666666;

    h4 {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 10px;
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
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 4px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-size: 21px;
        line-height: 25px;
        color: #DBDBDB; 
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
    Trash,
    Details,
    Days
};
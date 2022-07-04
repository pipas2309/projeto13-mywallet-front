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

const Check = styled.div`
    min-width: 69px;
    min-height: 69px;
    border-radius: 5px;
    background-color: ${props => props.done ? '#8FC549' : '#E7E7E7'};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 35px;
        height: auto;
    }    
`;

const Details = styled.div`
    color: #666666;

    h4 {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 5px;
    }

    p {
        font-size: 13px;
        line-height: 16px;
    }

    em {
        color: ${props => props.done ? '#8FC549' : '#666666'};
    }

    em:nth-child(2) {
        color: ${props => props.recorde ? '#8FC549' : '#666666'};
    }

`;


export {
    Habits,
    Check,
    Details
};
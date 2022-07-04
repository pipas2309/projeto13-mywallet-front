//Libs
import { useContext } from "react";

//Media and CSS
import { Data, Description, Habits, AmountP, AmountM } from "./style";

//Context
import UserContext from "../../contexts/UserContext";

export default function Transaction( {data, description, amount} ) {
    
    const { novaEntrada } = useContext(UserContext);

    return (
        <>
            <Habits>
                <Data>
                    <p>{data}</p>
                </Data>
                <Description>
                    <p>{description}</p>
                </Description>
                {novaEntrada === 'plus' ? 
                <AmountP>
                    <p>{amount}</p>
                </AmountP>
                :
                <AmountM>
                    <p>{amount}</p>
                </AmountM>
                }
            </Habits>
        </>
    );
}
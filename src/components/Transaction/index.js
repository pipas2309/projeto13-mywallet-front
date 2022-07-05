//Media and CSS
import { Data, Description, Movimentation, AmountP, AmountM } from "./style";

export default function Transaction({ date, description, amount, type }) {
    
    const brl = new Intl.NumberFormat("pt-BR", {style: "currency", "currency":"BRL"}).format(amount);

    console.log('to no transaction')
    return (
        <>
            <Movimentation>
                <div>
                    <Data>
                        {date}                    
                    </Data>
                    <Description>
                        {description}
                    </Description>
                </div>
                <div>
                    {
                    type === 'plus' ? 
                    <AmountP>   
                        {brl}
                    </AmountP>
                    :
                    <AmountM>
                        {brl}
                    </AmountM>
                    }
                </div>
            </Movimentation>
        </>
    );
}
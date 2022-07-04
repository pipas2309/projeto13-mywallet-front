//Media and CSS
import { Check, Details, Habits } from "./style";
import checkIco from '../../media/check.png'

export default function Habito( {habito, clica, index} ) {

    const maiorSequencia = habito.highestSequence;
    const sequenciaAtual = habito.currentSequence;
    
    let novaMaiorSequencia = 0;
    if(sequenciaAtual >= maiorSequencia) {
        novaMaiorSequencia = sequenciaAtual;
    } else {
        novaMaiorSequencia = maiorSequencia
    }

    const recorde = sequenciaAtual >= maiorSequencia && habito.done;

    return (
        <>
            <Habits>
                <Details done={habito.done} recorde={recorde}>
                    <h4>{habito.name}</h4>
                    <p>Sequência atual: <em>{sequenciaAtual} dias</em></p>
                    <p>Seu recorde: <em>{novaMaiorSequencia} dias</em></p>
                </Details>
                <Check done={habito.done} onClick={() => clica(index)}>
                    <img src={checkIco} alt='check' />
                </Check>
            </Habits>
        </>
    );
}
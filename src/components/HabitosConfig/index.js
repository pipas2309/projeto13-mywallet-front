//MEDIA and CSS
import { Days, Details, Habits, Trash } from "./style";
import trash from '../../media/trash.png';

export default function HabitosConfig( {habito, deletar, index} ) {
    const { days} = habito;
  
    return (
        <>
            <Habits>
                <Details>
                    <h4>{habito.name}</h4>
                    <Days select={false}>
                        {days.includes(0) ? <div className="check"><p>D</p></div> : <div><p>D</p></div>}
                        {days.includes(1) ? <div className="check"><p>S</p></div> : <div><p>S</p></div>}
                        {days.includes(2) ? <div className="check"><p>T</p></div> : <div><p>T</p></div>}
                        {days.includes(3) ? <div className="check"><p>Q</p></div> : <div><p>Q</p></div>}
                        {days.includes(4) ? <div className="check"><p>Q</p></div> : <div><p>Q</p></div>}
                        {days.includes(5) ? <div className="check"><p>S</p></div> : <div><p>S</p></div>}
                        {days.includes(6) ? <div className="check"><p>S</p></div> : <div><p>S</p></div>}
                    </Days>
                </Details>
                <Trash src={trash} onClick={() => deletar(index)} />

            </Habits>
        </>
    );
}
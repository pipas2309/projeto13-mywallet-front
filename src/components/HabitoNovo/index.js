//Libs
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

//Media and CSS
import { Days, Habits, Buttons } from "./style";

export default function HabitoNovo( {setCriar, config, troca, setTroca} ) {

    const [name, setName] = useState('');
    const [lista, setLista] = useState([]);
    const [carregando, setCarregando] = useState(false);

    function seleciona(e) {
        if(lista.includes(e)) {
            for(let i = 0; i < lista.length; i++) {
                if(lista[i] === e) {
                    lista.splice(i, 1);
                }
            }
            setLista([...lista])
        } else {
            setLista([...lista, e])
        }
    }

    function salvar() {
        setCarregando(true);
        const URL_NOVO_HABITO = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const novoHabito = {
            name,
            days: lista.sort((a,b) => a-b)
        } 
        const promise = axios.post(URL_NOVO_HABITO, novoHabito, config);
        promise.then(() => {
            setCriar(false);
            setTroca(!troca);
        });
        promise.catch(() => {
            setCarregando(false)
            console.log('deu xablau')
        });
    }

    return (
        <>
            <Habits>
                {carregando ? 
                <>
                    <input disabled type='text' placeholder="nome do hábito" onChange={(e) => setName(e.target.value)} value={name} />
                    <Days select={false}>
                        <div onClick={() => seleciona(0)} className={lista.includes(0) ? 'check' : ''} ><p>D</p></div>
                        <div onClick={() => seleciona(1)} className={lista.includes(1) ? 'check' : ''} ><p>S</p></div>
                        <div onClick={() => seleciona(2)} className={lista.includes(2) ? 'check' : ''} ><p>T</p></div>
                        <div onClick={() => seleciona(3)} className={lista.includes(3) ? 'check' : ''} ><p>Q</p></div>
                        <div onClick={() => seleciona(4)} className={lista.includes(4) ? 'check' : ''} ><p>Q</p></div>
                        <div onClick={() => seleciona(5)} className={lista.includes(5) ? 'check' : ''} ><p>S</p></div>
                        <div onClick={() => seleciona(6)} className={lista.includes(6) ? 'check' : ''} ><p>S</p></div> 
                    </Days>
                    <Buttons>
                        <button disabled onClick={() => setCriar(false)} ><ThreeDots color="#126BA5" height={80} width={80} /></button>
                        <button disabled onClick={salvar} ><ThreeDots color="#FFF" height={80} width={80} /></button>
                    </Buttons>
                </>
                :
                <>
                    <input type='text' placeholder="nome do hábito" onChange={(e) => setName(e.target.value)} value={name} />
                    <Days select={false}>
                        <div onClick={() => seleciona(0)} className={lista.includes(0) ? 'check' : ''} ><p>D</p></div>
                        <div onClick={() => seleciona(1)} className={lista.includes(1) ? 'check' : ''} ><p>S</p></div>
                        <div onClick={() => seleciona(2)} className={lista.includes(2) ? 'check' : ''} ><p>T</p></div>
                        <div onClick={() => seleciona(3)} className={lista.includes(3) ? 'check' : ''} ><p>Q</p></div>
                        <div onClick={() => seleciona(4)} className={lista.includes(4) ? 'check' : ''} ><p>Q</p></div>
                        <div onClick={() => seleciona(5)} className={lista.includes(5) ? 'check' : ''} ><p>S</p></div>
                        <div onClick={() => seleciona(6)} className={lista.includes(6) ? 'check' : ''} ><p>S</p></div> 
                    </Days>
                    <Buttons>
                        <button onClick={() => setCriar(false)} >Cancelar</button>
                        <button onClick={salvar} >Salvar</button>
                    </Buttons>
                </>
                    
                    }
                
            </Habits>
        </>
    );
}
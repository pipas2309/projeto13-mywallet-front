//Libs
import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Contexts
import TokenContext from './contexts/TokenContext';
import UserContext from './contexts/UserContext';
import HabitsContext from './contexts/TransationContext';

//Components
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Hoje from './components/Hoje';
import Habitos from './components/Habitos';
import Historico from './components/Historico';

function App() {

    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [percentage, setPercentage] = useState(0);
    const [transaction, setTransaction] = useState([]);

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ user, setUser, percentage, setPercentage }}>
                <HabitsContext.Provider value={{ transaction, setTransaction }}>
                    <GlobalStyle />
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Login />}/>
                            <Route path='/cadastro' element={<Cadastro />}/>
                            <Route path='/conta' element={<Hoje />}/>
                            <Route path='/nova-movimentacao' element={<Habitos />}/>
                            <Route path='/historico' element={<Historico />}/>
                        </Routes>
                    </BrowserRouter>
                </HabitsContext.Provider>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;
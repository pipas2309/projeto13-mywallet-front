//Libs
import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Contexts
import TokenContext from './contexts/TokenContext';
import UserContext from './contexts/UserContext';
import TransactionsContext from './contexts/TransationContext';

//Components
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Conta from './components/Conta';
import EntradaSaida from './components/EntradaSaida';

function App() {

    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [novaEntrada, setNovaEntrada] = useState(0);
    const [transaction, setTransaction] = useState([]);

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ user, setUser, novaEntrada, setNovaEntrada }}>
                <TransactionsContext.Provider value={{ transaction, setTransaction }}>
                    <GlobalStyle />
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Login />}/>
                            <Route path='/cadastro' element={<Cadastro />}/>
                            <Route path='/conta' element={<Conta />}/>
                            <Route path='/nova-movimentacao' element={<EntradaSaida />}/>
                        </Routes>
                    </BrowserRouter>
                </TransactionsContext.Provider>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;
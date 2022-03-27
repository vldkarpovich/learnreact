import React, {useState} from 'react';
import { BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { BasketContext } from './context';

function App() {

  const [basket, setBasket] = useState([]);
  const [totalSum, setTotalSum] = useState();

  return (
    <BasketContext.Provider value={{
      basket,
      setBasket,
      totalSum,
      setTotalSum
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </BasketContext.Provider>
  );
}

export default App;

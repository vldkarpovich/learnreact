import React, {useState} from 'react';
import { BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { BasketContext } from './context';

function App() {

  const [countBasket, setCountBasket] = useState(0);

  return (
    <BasketContext.Provider value={{
      countBasket,
      setCountBasket
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </BasketContext.Provider>
  );
}

export default App;

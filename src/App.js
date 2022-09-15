import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SignInModul from './components/SignInModul/SignInModul';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import UserProfile from './components/UserProfile/UserProfile';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { createContext, useState } from 'react';
import { Payment } from '@mui/icons-material';

export const productContext = createContext([])


function App() {
  const [cardProducts , setCartProducts] = useState([])
  return (
    <productContext.Provider value={[cardProducts , setCartProducts]}>
    < BrowserRouter>
   
    <Header/>
    <Routes>
    <Route path='/' element={<Home></Home>}/>
      <Route path='/sigup' element={<SignUp></SignUp>}/>
      <Route path='/sigin' element={<SignUp></SignUp>}/>
      <Route path='/userProfile' element={<UserProfile></UserProfile>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='/checkout' element={<Checkout></Checkout>}/>
      <Route path='/payment' element={<Payment></Payment>}/>
    </Routes>
    </ BrowserRouter>
    </productContext.Provider>
    
  );
}

export default App;

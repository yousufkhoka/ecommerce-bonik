
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
import { createContext, useReducer, useState } from 'react';
import  Payment  from './components/Payment/Payment';
import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { initialiUser, Reducer } from './components/Reducer/Readucer';

export const productContext = createContext([])



function App() {
  const [cardProducts , setCartProducts] = useState([])
  const [state , dispatch] = useReducer(Reducer,initialiUser)
  const [user , setUser] = useState({
    naem:'',
    email:'',
    photo:''
  })
  return (
    <productContext.Provider value={[cardProducts , setCartProducts]}>
    < BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}/>
      <Route path='/sigup' element={<SignUp dispatch={dispatch} setUser={setUser}></SignUp>}/>
      <Route path='/sigin' element={<SignUp dispatch={dispatch} setUser={setUser}></SignUp>}/>
      <Route path='/userProfile' element={<UserProfile state={state} user={user}></UserProfile>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='/checkout' element={<Checkout></Checkout>}/>
      <Route path='/payment' element={<Payment></Payment>}/>
      <Route path='/productDetails/:productId' element={<ProductDetails></ProductDetails>}/>
    </Routes>
    <Footer></Footer>
    </ BrowserRouter>
    </productContext.Provider>
    
  );
}

export default App;

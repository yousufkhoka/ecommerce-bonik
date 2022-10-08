import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from '../../App';
import ButtonNavGroup from '../ButtonNavGroup/ButtonNavGroup';
import CartCard from '../CartCard/CartCard';
import Header from '../Header/Header';
import './Cart.css'


const buttonActiveStyle ={
    background:'#E94560',
    color:'#ffff'
}
const buttonUnActiveStyle ={
    background:'#FFE1E6',
    color:'#E94560'
}
const buttonStyleNormal ={
    border: "none",
    padding: "6px 20px",
    borderRadius: "18px",
    fontSize: "14px",
    fontWeight:" 600",
    position: "relative",
    zIndex: "2",
    marginBottom: '10px',
    color:'#E94560',
    background:'#FFE1E6'

}
const buttonStyleActive ={
    border: "none",
    padding: "6px 20px",
    borderRadius: "18px",
    fontSize: "14px",
    fontWeight:"600",
    position: "relative",
    zIndex: "2",
    marginBottom: '10px',
    color:'#ffff',
    background:'#E94560'

}

const shapeButtonNormal  = {
    background:'#FFE1E6'
}
const Cart = () => {
    const [cardProducts , setCartProducts] = useContext(productContext)
    const [countrse , setCountrse] = useState([])

      const total = cardProducts.reduce((value , pd ) => value + (pd.price*pd.quantity) ,0)

      useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => setCountrse(data));
    
      },[])
      

   

    return (
        <>
        <Header></Header>
        <div className='container-fluid cart px-4 py-4' style={{background:'#F6F9FC'}}>
           <div className="row">
                <div className="col-xl-6 col-sm-6 col-10">
                <div className="row justify-content-center button-perent">
                    <div className="col-lg-3 col-md-4  col-6">
                        <Link to='/cart'><button style={buttonStyleActive} >1. Cart <div style={shapeButtonNormal} className="buttonShape"></div></button>
                   </Link>
                        
                    </div>

                    <div className="col-lg-3 col-md-4  col-6">
                        
                    <Link to='/checkout'><button style={buttonStyleNormal}>2. Details <div style={shapeButtonNormal} className="buttonShape"></div></button></Link> 
                    
                    </div>
                    <div className="col-lg-3 col-md-4  col-6"> 
                    <Link to='/payment'><button style={buttonStyleNormal}>3. Payment
                    <div style={shapeButtonNormal} className="buttonShape"></div>
                    </button></Link> 
                    
                    </div>
                    <div className="col-lg-3 col-md-4  col-6">
                        <Link to='/'><button style={buttonStyleNormal}>4. Review
                    
                    </button></Link>  
                    
                    </div>
                </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
           
            <div className="row">
                <div className="col-md-8 col-12">
                
                    
                    {
                        cardProducts.map(pd => <CartCard product={pd} ></CartCard>)
                    }
                 

                  
                  
                </div>
                <div className="col-md-4 col-12">

                    <div className="cart-right shadow-sm  my-4 p-4"  style={{background:'#ffff',borderRadius:'10px'}}>
                         <div className="totalAmaount d-flex justify-content-between">
                            <p>total :</p>
                            <h5>{`$${total}.00`}</h5>
                         </div>
                         <div className="apply-voucher">
                            <p>Additional Comments <span>Note</span> </p>
                            <form >
                                <div className="input-filud">
                                    <textarea className='form-control' name="" id="" cols="10" rows="10" value=''></textarea>
                                    </div>
                                    <div className="input-filud">
                                    <input className='form-control' type="text" placeholder=' Voucher'/>
                                    </div>
                                    <div className="input-filud">
                                        <button>Apply Voucher</button>
                                    
                                    </div>

{/* Shipping Estimates */}
                              
                            </form>
                            
                         </div>
                         <div className="shipping-estimates">
                            <p>Shipping Estimates</p>
                            
                            <form>
                                <div className="input-filud">
                                <label style={{paddingBottom:'8px'}} htmlFor="country">country</label>
                                <select className='form-control' name="" id="country">
                                    <option value="select country">select your country</option>

                                    {
                                        countrse.map(country => <option value={country.name.common}>{country.name.common}</option>)
                                    }
                                    
                                </select>
                                </div>
                                <div className="input-filud">
                                <label style={{paddingBottom:'8px'}} htmlFor="state">State</label>
                                <select className='form-control' name="" id="state">
                                    <option value="select state">select your state</option>

                                    {
                                        countrse.map(country => <option value={country.capitalcommon}>{country.capital}</option>)
                                    }
                                    
                                </select>
                                </div>
                                <div className="input-filud">
                                        <button type='button'>Calculate Shipping</button>
                                    
                                    </div>
                                    <div className="input-filud">
                                    <Link to='/checkout'> <button className='CheckoutNow'>Checkout Now</button></Link>
                                       
                                    
                                   

                                </div>
                               
                                    

                            </form>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cart;
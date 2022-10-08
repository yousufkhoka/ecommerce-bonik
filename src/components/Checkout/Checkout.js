import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import PriceCard from '../PriceCard/PriceCard';
import ShippingAddress from '../ShippingAddress/ShippingAddress';
import './Checkout.css'


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
const shapeButtonActive  = {
    background:'#E94560'
}
const shapeButtonNormal  = {
    background:'#FFE1E6'
}
const Checkout = () => {
    return (
        <>
        <Header></Header>
        <div className='checkout container-fluid cart px-4 py-4' style={{background:'#F6F9FC'}}>
            <div className="row">
                <div className="col-xl-6 col-sm-6 col-10">
                <div className="row justify-content-center button-perent">
                    <div className="col-lg-3 col-md-4  col-6">
                      <Link to='/cart'>
                      <button style={buttonStyleActive} >1. Cart <div style={shapeButtonActive} className="buttonShape"></div></button>
                      </Link>
                        
                   
                    </div>
                    <div className="col-lg-3 col-md-4  col-6">
                        <Link to='/checkout'>
                        <button style={buttonStyleActive}>2. Details <div style={shapeButtonNormal} className="buttonShape"></div></button>
                    
                        </Link>
                         
                    </div>
                    <div className="col-lg-3 col-md-4  col-6"> 
                    <Link to='/payment'>
                    <button style={buttonStyleNormal}>3. Payment
                    <div style={shapeButtonNormal} className="buttonShape"></div>
                    </button>
                    </Link>
                    
                    
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
            <div className="col-lg-8">
        
                <ShippingAddress heading={"Shipping Address"} checkboxprops={false} ></ShippingAddress>
                
                
               <ShippingAddress heading={"Billing Address"} checkboxprops={true} ></ShippingAddress>
                <div className="row">
                    <div className="col-md-6">
                    <div className="input-filud">
                <Link to='/cart'> <button> Back to Cart</button>  </Link>                                
                </div>
                    </div>
                    <div className="col-md-6">
                    <div className="input-filud">
                     <Link to='/payment'><button className='CheckoutNow'>Proceed to Payment</button>
                </Link> 
                     </div>
                    </div>
                </div>
               



               
            </div>
            <div className="col-lg-4">
                <PriceCard statement={true}></PriceCard>
            </div>
          </div>

         
        </div>
        </>
    );
};

export default Checkout;
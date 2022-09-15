import React, { useContext } from 'react';
import CartCountButton from '../CartCountButton/CartCountButton';
import Button from '@mui/material/Button';
import CountButton from '../CountButton/CountButton';
import { productContext } from '../../App';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import './CartCard.css'
const styleDflex = {
    display:'flex',
    marginRight:'15px'
   }

const CartCard = (props) => {
    const {img,name,price,quantity } = props.product
    const [cardProducts , setCartProducts] = useContext(productContext)

    const totalPrice =Math.round(price*quantity)
    const cartFormRemove = product =>{
        
        product.quantity = 0
        const remainignCart = cardProducts.filter(pd => pd.id !== product.id)
        setCartProducts(remainignCart)
    } 
    return (
        <div className='row p-3 my-4 shadow-sm justify-content-between cart-card' style={{background:'#ffff',borderRadius:'14px'}}>
           
            <div className="col-12 col-sm-5 col-lg-5">
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <img className='w-100' src={img} alt="" />
                    </div>
                    <div className="col-sm-6 col-12">
                        <h5>{name}</h5>
                        <p style={{color:'#7D879C' , marginTop:'30px'}}>{`$${price}.00  x  ${quantity}`} <span style={{color:'#E94560' ,fontWeight:'600'}}>{`$${totalPrice}.00`}</span></p>
                        
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-2 col-lg-3 items-right">
            <Button onClick={()=> cartFormRemove(props.product)} variant="contained" style={{background:'#E94560' , marginBottom:'40px'}}>Remove</Button>
            
            
            <div className="items-button">
            {quantity === 1 && <button className='disabled-button'>
            <MinimizeRoundedIcon style={{marginBottom:'13px'}} />
            </button>}
            <CountButton product={props.product} dflex={styleDflex}  ></CountButton> 
            </div>
             
              
                
        
            </div>
           
            
        </div>
    );
};

export default CartCard;
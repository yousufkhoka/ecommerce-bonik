import React, { useContext } from 'react';
import { productContext } from '../../App';
import './PriceCard.css'

const PriceCard = () => {
    const [cardProducts , setCartProducts] = useContext(productContext)

    const total =  cardProducts.reduce((value , pd) => value + pd.price*pd.quantity,0)
     const subtotal = Math.round(total)
     const tex = Math.round(subtotal*30/100) 
     const cureantPrice = Math.round(subtotal - tex)
    return (
        <div className='price-card shadow-sm  my-4 p-4 rounded' style={{background:'#ffff'}}>
            <div className="border-bottom">
            <p>Subtotal: <span>{`$${subtotal}.00`}</span></p>
            <p>Shipping: <span> -</span></p>
            <p>Tax: <span>{ `$${tex}.00`}</span></p>
            <p>Discount: <span>-</span></p>
            </div>
            <h4 className='text-end my-2 pb-2' >{`$${cureantPrice}.00`}</h4>
            <form>
                <div className="input-filud">
                    <input className='form-control' type="text" placeholder='Voucher'/>

                </div>
                <div className="input-filud">
                    <button>Apply Voucher</button>

                </div>
            </form>

        </div>
     
       
    );
};

export default PriceCard;
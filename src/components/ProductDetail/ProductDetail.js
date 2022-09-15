import React, { useContext } from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import './ProductDetail.css'
import CountButton from '../CountButton/CountButton';
import { productContext } from '../../App';

const ProductDetail = ({product}) => {
    const {img,name,seller,price,quantity} = product
    console.log(product)
   const styleDflex = {
    display:'flex',
    marginRight:'15px'
   }
   const [cardProducts , setCartProducts ] = useContext(productContext)

   const hendleIncrement = product =>{
       const toBeAdedId = product.idt


       const sameProduct = cardProducts.find(pd => pd.id === toBeAdedId)

       if(sameProduct){
         const count =  sameProduct.quantity + 1  
         sameProduct.quantity = count
       
         const othres = cardProducts.filter(pd => pd.id !== toBeAdedId)
         
         setCartProducts([...othres , sameProduct])
       }
       else{
           product.quantity = 1
           setCartProducts([...cardProducts, product])
       }
   }


    return (
        <div className='product-detail'>
            <div className="row justify-content-between">
                <div className="col-md-6 col-12">
                    <div className="img ">
                        <img className='w-100' src={img} alt="" /> 
                    </div>
                </div>
                <div className="col-md-5 col-12">
                  <h4>{name}</h4>
                  <p><span>Brand: </span>{seller}</p>
                  <p className='d-flex'><span>Rated:</span>
                  <ul className='d-flex text-start' style={{paddingLeft:'10px' }}>
                    <li><StarRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
                    <li><StarRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
                    <li><StarRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
                    <li><StarRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
                    <li><StarBorderRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
                 </ul>
                 (50)
                  </p>
                  <h3>{`$${price}.00`}</h3>
                  <h6 style={{color:''}}>Stock Available</h6>

                  { quantity < 1 ? <button onClick={()=>hendleIncrement(product)} className="add-to-cart">Add to Cart</button>
                  :<CountButton product={product} dflex={styleDflex} ></CountButton>}
                </div>
                
            </div>
            
        </div>
    );
};

export default ProductDetail;
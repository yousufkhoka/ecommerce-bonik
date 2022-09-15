import React, { useContext } from 'react';
import { productContext } from '../../App';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


const CartCountButton = (props) => {
    const [cardProducts , setCartProducts ] = useContext(productContext)

    const hendleIncrement = product =>{
          const count =  product.quantity + 1  
          product.quantity = count
    }
    const hendleDiccrement = product =>{

        product.quantity = product.quantity - 1
        // const toBeAdedId = product.id
        // console.log(product)

        // const sameProduct = cardProducts.find(pd => pd.id === toBeAdedId)

        // if(props.product.quantity >= 1){
        //   const count =  sameProduct.quantity - 1  
        //   sameProduct.quantity = count
        // }
        
        
    }
    


    return (
        <div className='count-button' style={props.dflex}>
            <div className="dicrement" style={props.dflex} >
            {props.product.quantity >= 1 && <button style={props.dflex} onClick={()=>hendleDiccrement(props.product)} >
                <MinimizeRoundedIcon style={{marginBottom:'13px'}} /></button>}
              {props.product.quantity >= 1 && <span style={props.styleMargin}>{props.product.quantity}</span>}
            </div>
             
            <button style={props.styleMargin} onClick={()=>hendleIncrement(props.product)} ><AddRoundedIcon/></button>
        </div>
    );
};

export default CartCountButton;
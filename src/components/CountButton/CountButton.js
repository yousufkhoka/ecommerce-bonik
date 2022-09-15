import React, { useContext } from 'react';
import { productContext } from '../../App';
import './CountButton.css'
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


const CountButton = (props) => {
    const [cardProducts , setCartProducts ] = useContext(productContext)

    const hendleIncrement = product =>{
        const toBeAdedId = product.id
 

        const sameProduct = cardProducts.find(pd => pd.id === toBeAdedId)

        if(sameProduct){
          const count =  sameProduct.quantity + 1  
          sameProduct.quantity = count
        
          const othres = cardProducts.filter(pd => pd.id !== toBeAdedId)
          
          setCartProducts([  sameProduct , ...othres])
        }
        else{
            product.quantity = 1
            setCartProducts([...cardProducts, product])
        }
    }
    const hendleDiccrement = product =>{
        const toBeAdedId = product.id
        console.log(product)

        const sameProduct = cardProducts.find(pd => pd.id === toBeAdedId)

        if(props.product.quantity >= 1){
          const count =  sameProduct.quantity - 1  
          sameProduct.quantity = count
        
          const othres = cardProducts.filter(pd => pd.id !== toBeAdedId)
          
          setCartProducts([  sameProduct , ...othres])

          if(count === 0 ){
            const othres = cardProducts.filter(pd => pd.id !== toBeAdedId)
          setCartProducts([...othres])
          }
        }
        
        
    }
    


    return (
        <div className='count-button' style={props.dflex}>
            <div className="dicrement" style={props.dflex} >
            {props.product.quantity >= 1 &&  <button style={props.dflex} onClick={()=>hendleDiccrement(props.product)} >
                <MinimizeRoundedIcon style={{marginBottom:'13px'}} /></button>}
              {props.product.quantity >= 1 && <span style={props.styleMargin}>{props.product.quantity}</span>}
            </div>
             
            <button style={props.styleMargin} onClick={()=>hendleIncrement(props.product)} ><AddRoundedIcon/></button>
        </div>
    );
};

export default CountButton;
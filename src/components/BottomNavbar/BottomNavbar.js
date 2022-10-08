import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNavbar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { productContext } from '../../App';
import { fontSize } from '@mui/system';



const cardProductsLengthStyle = {
    position: 'absolute',
    top:'4px',
    right:'-9px',
    background:'#E94560',
    textAlign:'center',
    borderRadius:'9px',
    color:'#ffff',
    padding:  '0 4px',
    fontSize:'12px',
    fontWeight:'700',

}
const BottomNavbar = () => {
    const [cardProducts , setCartProducts] = useContext(productContext)
    return (
        <div  className='BottomNavbar shadow-sm'>
            <div className="container-fluid" >
                <ul className='d-flex justify-content-between text-center'>
                    <li>
                        <NavLink to='/' >
                        <HomeOutlinedIcon/>
                        <p>Home</p>
                        </NavLink> 
                            </li>
                   <li>
                        <NavLink to='/checkout' >
                        <CategoryOutlinedIcon/>
                        <p>Category</p></NavLink>
                   </li>
                   <li style={{position:'relative'}}>
                    <span style={cardProductsLengthStyle}>{cardProducts.length}</span>
                        <NavLink to='/cart'>
                        <ShoppingBagOutlinedIcon/>
                        <p>   
                            Cart 
                         </p>
                        </NavLink>
                   </li>
                    
                   <li>
                        <NavLink to='/profile'  >
                        <PersonOutlineOutlinedIcon/>
                        <p>Account</p>
                        </NavLink> 
                   </li>
                  
                </ul>
            </div>
            
        </div>
    );
};

export default BottomNavbar;
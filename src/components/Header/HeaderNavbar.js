import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppsIcon from '@mui/icons-material/Apps';
import './Header.css';
import Face3OutlinedIcon from '@mui/icons-material/Face3Outlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import PedalBikeOutlinedIcon from '@mui/icons-material/PedalBikeOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MicNoneIcon from '@mui/icons-material/MicNone';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

const HeaderNavbar = () => {
    const [categoryShow , setCategoryShow] = useState(false)
    // const StylecategoryNotShow ={
    //     position: 'absolute',
    //     top:'0',
    //     left:'5%',
    //     paddingLeft: '0',
    //     width: '285px',
    //     background: '#ffff',
    //     zIndex: '99',
    //     opacity: '0',
    //     visibility: 'hidden'
    
    //  }
    //  const StylecategoryShow = {
    //     position: 'absolute',
    //     top:"125%",
    //     left:"5%",
    //     paddingLeft: "0",
    //     width: '285px',
    //     background: '#ffff',
    //     zIndex: '99',
    //     opacity: '1',
    //     visibility: {categoryShow ?'visible'}
    
    //  }
    return (
        <div className='px-4 d-none d-lg-block'>
            <div className="container-fluid ">
                <div className="row align-items-center ">
                    <div className="col-lg-2 NavButton">
                    <Button onClick={()=> setCategoryShow(!categoryShow)} style={{color:'#7d879c', background:'#F6F9FC'}}><AppsIcon style={{color:'#000'}} /> Category <ExpandMoreIcon  /> </Button>
                     {categoryShow && <ul className='shadow py-4 Nav-categoryShow' >
                        <li><Face3OutlinedIcon style={{margin:'0 10px'}} /> Fashion</li>
                        <li><LaptopChromebookOutlinedIcon style={{margin:'0 10px'}} /> Electronics</li>
                        <li><PedalBikeOutlinedIcon style={{margin:'0 10px'}} /> Bikes</li>
                        <li><GrassOutlinedIcon style={{margin:'0 10px'}} /> Home & Garden</li>
                        <li><CardGiftcardIcon style={{margin:'0 10px'}} /> Gifts</li>
                        <li><MicNoneIcon style={{margin:'0 10px'}} />Music</li>
                        <li><HealthAndSafetyOutlinedIcon style={{margin:'0 10px'}} />Health & Beauty</li>
                        <li><CardGiftcardIcon style={{margin:'0 10px'}} />Pets</li>
                        <li><HealthAndSafetyOutlinedIcon style={{margin:'0 10px'}} />Baby Toys</li>
                        <li><CardGiftcardIcon style={{margin:'0 10px'}} />Groceries</li>
                        <li><HealthAndSafetyOutlinedIcon style={{margin:'0 10px'}} />Automotive</li>
                      </ul>}
                    </div>
                    <div className="col-lg-10 left-navbart">
                        <ul className='d-flex justify-content-end gap-5'>
                            <li><Link to='/' className='navlink'>Home</Link> </li>
                            <li>Pages
                                <ul className='shadow'>
                                    <Link style={{textDecoration:'none', color:'#7d879c'}} to='/'><li>Single product</li></Link>
                                    <Link style={{textDecoration:'none', color:'#7d879c'}} to='/checkout'><li>Checkout</li></Link>
                                    <Link style={{textDecoration:'none', color:'#7d879c'}} to='/cart'><li>Cart</li></Link>
                                </ul>
                              

                            </li>
                            <li><Link className='navlink' to='UserProfile'>User Profile</Link> </li>
                            <li>Vendor Account </li>
                            <li> Track My Orders</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default HeaderNavbar;
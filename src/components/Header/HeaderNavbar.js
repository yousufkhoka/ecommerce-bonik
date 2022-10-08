import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppsIcon from '@mui/icons-material/Apps';
import './Header.css';
import CategoryLIst from '../CategoryList/CategoryLIst';

const HeaderNavbar = () => {
    const [categoryShow , setCategoryShow] = useState(false)
  
    return (
        <div className='px-4 d-none d-lg-block'>
            <div className="container-fluid ">
                <div className="row align-items-center ">
                    <div className="col-lg-2 NavButton">
                    <Button onClick={()=> setCategoryShow(!categoryShow)} style={{color:'#7d879c', background:'#F6F9FC'}}><AppsIcon style={{color:'#000'}} /> Category <ExpandMoreIcon  /> </Button>
                     {categoryShow && <CategoryLIst/>}
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
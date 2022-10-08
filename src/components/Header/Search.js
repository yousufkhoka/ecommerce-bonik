import React, { useContext, useState } from 'react';
import './Header.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SignInModul from '../SignInModul/SignInModul';
import { Link } from 'react-router-dom';
import { productContext } from '../../App';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppsIcon from '@mui/icons-material/Apps';
import Button from '@mui/material/Button';
import CategoryLIst from '../CategoryList/CategoryLIst';

 
const cartlenghtStyle = {
    position:'absolute',
    top:'-10px',
    right:'0',
    background: '#E94560',
    height:'21px',
    width:'21px',
    borderRadius:'100%',
    color:'#ffff',
    fontSize:'15px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}








const Search = ({fixedTop}) => {
    const [categoryShow , setCategoryShow] = useState(false)
    const [category , setCategory] = useState({name:'All Categories'})
    const [showcategory ,setShowcategory ] = useState(false)
    const [open, setOpen] = useState(false);
    const [cardProducts ,setCartProducts]  = useContext(productContext)
    const categories = [ 'All Categories', 'Car','Clothes', 'Electronics','Laptop','Camera','Toys']
   
const hendleCaterory = cate =>setCategory({name:cate})

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

    return (
        <div className='seach-header'>
            <div className="contaner">
                <div className="row mx-1 mx-sm-4 align-items-center justify-content-between">
                    <div className="col-lg-2 d-none d-lg-flex NavButton">
                        <Link to='/'>
                        <img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt="" />
                        </Link>
                         {fixedTop !==''&& <div>
                          <Button onClick={()=> setCategoryShow(!categoryShow)} style={{color:'#7d879c', background:'#F6F9FC'}}><AppsIcon style={{color:'#000'}} /><ExpandMoreIcon  /> </Button>
                        {categoryShow && <CategoryLIst/>}
                            
                          </div>}
                       
                    </div>
                    <div className="col-lg-7 text-center">
                       <div className="seach-bar">
                       <i class="fa-solid fa-magnifying-glass searchBar"></i>
                        <input type="text" placeholder='Search and hit enter' className=''/>
                         <span onClick={()=> setShowcategory(!showcategory)} className='d-none d-lg-flex'> <label>{category.name}</label>
                          {showcategory ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                         { showcategory && <ul className='shadow py-3  bg-white rounded'>
                           {
                            categories.map(categori => <li onClick={()=>hendleCaterory(categori)} style={{cursor:'pointer'}}>{categori}</li>)
                           }
                           
                          </ul>}
                         
                         </span>
                       </div>
                    </div>
                    <ul className="col-lg-2 text-end d-none d-lg-flex justify-content-end gap-4">
                        <li  className='outline-button' onClick={()=>handleOpen(true)}><PersonOutlineIcon></PersonOutlineIcon></li>
                        <Link to ='/cart'>
                        <li className='outline-button' style={{color:'#000'}} >
                            <span style={cartlenghtStyle}>{cardProducts.length }</span>
                            <LocalMallOutlinedIcon/></li>
                        </Link>
                       
                    </ul>
                </div>
            </div>
            <SignInModul open={open} handleClose={handleClose}></SignInModul>
            
        </div>
    );
};

export default Search;
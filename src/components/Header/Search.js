import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SignInModul from '../SignInModul/SignInModul';
import { Link } from 'react-router-dom';


const Search = () => {
    const [category , setCategory] = useState({name:'All Categories'})
    const [showcategory ,setShowcategory ] = useState(false)
    const [open, setOpen] = React.useState(false);
    const categories = [ 'All Categories', 'Car','Clothes', 'Electronics','Laptop','Camera','Toys']
   
const hendleCaterory = cate =>setCategory({name:cate})

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

    return (
        <div className='seach-header'>
            <div className="contaner">
                <div className="row mx-1 mx-sm-4 align-items-center justify-content-between">
                    <div className="col-lg-2 d-none d-lg-flex">
                        <Link to='/'>
                        <img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt="" />
                    
                        </Link>
                    </div>
                    <div className="col-lg-8 text-center">
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
                        <li  className='outline-button'><LocalMallOutlinedIcon></LocalMallOutlinedIcon></li>
                    </ul>
                </div>
            </div>
            <SignInModul open={open} handleClose={handleClose}></SignInModul>
            
        </div>
    );
};

export default Search;
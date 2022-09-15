import * as React from 'react';
import './ProductCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CountButton from '../CountButton/CountButton';
import ProductDetailModal from '../ProductDetailModal/ProductDetailModal';



  const  ProductCard = (props)=> {
     const {img,name,price} = props.product
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     
     const numPrice = Number(price)
     const discountPrice = (numPrice*30/100).toFixed(2) ; 
     
  return (
    <>
    <Card sx={{ }} className='product-card my-3 me-3'>
      <CardContent>
        <div className="card-top d-flex justify-content-between">
        <div>
        <span>30% off</span>
        </div>
        <div className="itemsIcon">
        <ul>
          <li><VisibilityIcon onClick={handleOpen} style={{color:'#0F3460'}} /></li>
          <li><FavoriteBorderOutlinedIcon style={{color:'#0F3460'}} /></li>
        </ul>
        </div>
        </div>
        <img className='w-100' src={img} alt="" />
      </CardContent>
      <CardContent className='d-flex justify-content-between'>
      <div className="buttom-left pb-2">
        <p>{name}</p>
        <ul className='d-flex '>
          <li><StarRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
          <li><StarRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
          <li><StarRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
          <li><StarRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
          <li><StarBorderRoundedIcon style={{color:'#FFCD4E', fontSize:'18px'}} /></li>
        </ul>
        <span style={{color:'#E94560'}}>{`$${discountPrice}`}</span>
        <span style={{color:'#7D879C' , textDecoration:'line-through'}}>{`$${price}.00`}</span>
      </div>
      <div className='text-center'>
        <CountButton product={props.product} ></CountButton>
      </div>
      </CardContent>
    </Card>
    <ProductDetailModal open={open} handleClose={handleClose} product={props.product}></ProductDetailModal>
    </>
  );
}

export default  ProductCard;
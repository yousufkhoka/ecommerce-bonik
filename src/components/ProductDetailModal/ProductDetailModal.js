import * as React from 'react';
import './ProductDetailModal.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CardContent } from '@mui/material';
import ProductDetail from '../ProductDetail/ProductDetail';
import ClearIcon from '@mui/icons-material/Clear';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
 
  p: 4,
  outline:'none',
  borderRadius:'10px'
};
  const clearIconStyle = {
    position: 'absolute',
    top:'10px',
    right:'20px',
    color:'red'
  }

  const  ProductDetailModal = ({open , handleClose , product}) =>{
    

  return (
    <div className='product-detail-modal'>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >  
      <div className="row justify-content-center">
        <div className="col-8 col-md-8 ">
        <Box sx={style} className='modal-box'>
         <CardContent>
            
           <ProductDetail product={product}></ProductDetail>
           <ClearIcon onClick={handleClose} style={clearIconStyle} ></ClearIcon>
         </CardContent>
        </Box>
       
        </div>
      </div>
        
      </Modal>
    </div>
  );
}
export default ProductDetailModal;
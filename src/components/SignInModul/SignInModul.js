import * as React from 'react';
import Modal from '@mui/material/Modal';
import SignUp from '../SignUp/SignUp';
import { Box } from '@mui/system';

   

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid transparent',
  
  
};


export default function SignInModul({open , handleClose}) {



  return (
    
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus
      >
        <Box sx={style}>
          <SignUp></SignUp>
        </Box>
       
      </Modal>
  
  );
}
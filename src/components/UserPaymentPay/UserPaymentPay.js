import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const carcletToggel = {
    width:'12',
    height:'12',
    barder:'1px solid #1976D2'
}
const UserPaymentPay = () => {
     


    return (
        <div className='shadow-sm my-4 p-4  rounded' style={{background:'#ffff'}}>
            <div className="pay-credit-card">
             <h4> <input type="radio" name='payment' style={{fontSize:'99px'}}/> Pay with credit card</h4>
             <div className="form">
                <div className="row">
                    <div className="col-sm-6">
                    <div className="input-filud">
                        <label htmlFor=" CardNumber"> Card Number</label>
                        <input className='form-control' type="text" id='CardNumber' />
                    </div>
                    <div className="input-filud">
                        <label htmlFor=" NameonCard1">Name on Card</label>
                        <input className='form-control' type="text" id='NameonCard1' />
                    </div>
                    <h4><input type="radio" name='payment' /> Cash On Delivery</h4>
                    </div>
                    <div className="col-sm-6">
                    <div className="input-filud">
                        <label htmlFor="data"> Exp Date</label>
                        <input  className='form-control' type="data" id='data' />
                    </div>
                    <div className="input-filud">
                        <label htmlFor="NameonCarda2"> Name on Card</label>
                        <input  className='form-control' type="text" id='NameonCarda2' />
                    </div>
                    </div>
                </div>
             </div>
            
            </div>
            <div className="pay-paypal"></div>
            <div className="cash-on-delivery"></div>
        </div>
    );
};

export default UserPaymentPay;
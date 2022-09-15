import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const ShippingAddress = ({heading , checkboxprops}) => {
    
    const [countrse , setCountrse] = useState([])
    const [checkbox , setCheckbox] = useState(false)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

      useEffect(()=>{

        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => setCountrse(data));
    
      },[])
    return (
        <div className='shipping-address shadow-sm p-4 my-4 rounded' style={{background:'#ffff',}}>
          <p>{heading}</p>  
         { checkboxprops && <div className="">
            <Checkbox onClick={()=> setCheckbox(!checkbox)}  {...label}  /> <span>Same as shipping address</span> 
            </div>}
         { !checkbox && <form>
            <div className="row">
                <div className="col-lg-6">
                <div className="input-filud">
                    <label htmlFor="fname">Full name</label>
                    <input className='form-control' type="text" id='fname' />
                </div>
                <div className="input-filud">
                    <label htmlFor="phone">Phone Number</label>
                    <input className='form-control' type="Number" id='phone' />
                </div>
                <div className="input-filud">
                    <label htmlFor="zip">Zip Code</label>
                    <input className='form-control' type="Number" id='zip' />
                </div>

                <div className="input-filud">
                    <label htmlFor="Address1">Address 1</label>
                    <input className='form-control' type="text" id='Address1' />
                </div>
                </div>
                <div className="col-lg-6">
                <div className="input-filud">
                    <label htmlFor="Email">Email Address</label>
                    <input className='form-control' type="Email" id='Email' />
                </div>
                <div className="input-filud">
                    <label htmlFor="Company">Company</label>
                    <input className='form-control' type="text" id='Company' />
                </div>
                <div className="input-filud">
                                <label style={{paddingBottom:'8px'}} htmlFor="country">country</label>
                                <select className='form-control' name="" id="country">
                                    <option value="select country">select your country</option>

                                    {
                                        countrse.map(country => <option value={country.name.common}>{country.name.common}</option>)
                                    }
                                    
                                </select>
                                </div>

                <div className="input-filud">
                    <label htmlFor="Address2">Address 2</label>
                    <input className='form-control' type="text" id='Address2' />
                </div>
                </div>
                
            </div>
          


          </form>}
        </div>
    );
};

export default ShippingAddress;
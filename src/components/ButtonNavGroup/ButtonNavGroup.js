import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonNavGroup.css'

const ButtonNavGroup = ({buttonUnActiveStyle,buttonActiveStyle}) => {
    return (
        <div className='button-nav-group'> 
        <div className="row justify-content-between">
            <div className="col-sm-4  col-lg-3 col-md-3">
                <div className="item">
                <Link to='/cart'>  <button style={buttonActiveStyle}>1. Cart</button></Link>
                </div>
                
              
            </div>
            <div className="col-sm-4  col-lg-3 col-md-3">
                <div className="item">
                <Link to='/checkout'><button style={buttonUnActiveStyle}>2. Details</button></Link>
                <div className="lineShape" style={buttonUnActiveStyle}></div>
                </div>
            
                
            </div>
            <div className="col-sm-4 col-lg-3 col-md-3">
                <div className="item">
                <Link to='payment'><button style={buttonUnActiveStyle}>3. Payment</button></Link>
                <div className="lineShape" style={buttonUnActiveStyle}></div>
                </div>
           
                
            </div>
            <div className="col-sm-4 col-lg-3 col-md-3">
                <div className="item">
                <Link to='review'><button style={buttonUnActiveStyle}>4. Review</button></Link>
                <div className="lineShape" style={buttonUnActiveStyle}></div>
                </div>
          
                
            </div>
        </div>
        


        </div>
    );
};

export default ButtonNavGroup;
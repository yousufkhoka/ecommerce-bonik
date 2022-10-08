import React, {  useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import { useForm } from "react-hook-form";
import './SingUp.css'
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { submitFacebookSigin, submitGoogleSigin } from './Firebase.auth';
import { firebaseInitializeApp } from './Firebase.auth';
import { useReducer } from 'react';
import { initialiUser, Reducer,USER_SIGN_IN_UP,USER_SIGN_OUT } from '../Reducer/Readucer';


   
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
    width:'500px',
    bgcolor: 'background.paper',
    borderRadius:'10px',
    boxShadow: 24,
    paddingTop:'20px ',
    margin:'30px auto',
    paddingBottom:'0 !importent'
  
    
  };

const SignUp = ({dispatch , setUser}) => {
    firebaseInitializeApp()
    const [sigInOrUp , setSigInOrUp] = useState(false)
    
     

 const hendleGoogleSigni= () =>{
    submitGoogleSigin()
    .then(res =>{
        setUser(res) 
        console.log(res)
        dispatch({type:USER_SIGN_IN_UP , ...res})
        
    })
 }
 const hendleFacebookSigni = () => {
    submitFacebookSigin()
    .then(res => {
        setUser(res)
       
    })
    
 }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{};
  
    return (
        
        <Box sx={style}  >
        <Typography id="modal-modal-title" style={{margin:'5px 0' ,fontSize:'20px', fontWeight:'700' , textAlign:'center'}} variant="h6" component="h2">
           Welcome To Ecommerce
        </Typography>
        <Typography id="modal-modal-title" style={{color:'#7E838E' , fontSize:'14px'  , textAlign:'center', paddingBottom:'20px'}} variant="p" component="h6">
           Log in with email & password 
        </Typography>
        <CardContent style={{padding:'0 50px'}}>
          {/* sing in / up form  */}
        <form onSubmit={handleSubmit(onSubmit)}>
            { sigInOrUp && <div className="input-field">
             <label>Full Name</label>
            <input className='form-control' type='name' {...register("name", { required: true })} placeholder='full Name'/>
                {errors.name  && <span> name is required</span>}
            </div>}

            <div className="input-field">
             <label>Your Email</label>
            <input className='form-control' type='email' {...register("email", { required: true })} placeholder='Your Email'/>
                {errors.email && <span>email is required</span>}
            </div>

            <div className="input-field">
                <label for='password'>Password</label>
            <input className='form-control'  id='password' type='password' {...register("password", { required: true })} placeholder='Password'/>
                {errors.password && <span>password  is required</span>}
            </div>
            
          { sigInOrUp &&  <div className="input-field">
                <label for='confirmPassword'>Confirm Password</label>
            <input className='form-control'  id='confirmPassword' type='password' {...register("Password", { required: true })} placeholder='Confirm Password'/>
                {errors.Password && <span>Password  is required</span>}
            </div>}
           { sigInOrUp && <span style={{color:'#7E838E' , textAlign:'center'}}>
            <Checkbox {...label}  size="small" />
            By signing up, you agree to
            <Link to='/'>Terms & Condtion</Link>
           
            </span>}
            
            <div className="input-field">
            <input className='form-control'  type="submit" value={sigInOrUp ?'Create Account':'Login' }style={{background:'#E94560' ,color:'#ffff', fontSize:'18px'}}/>
            </div> 

            </form>

            <h6 className='text-center my-3'>or</h6>
            <button onClick={hendleFacebookSigni} className='Sigin-button-fd-g' style={{background:'#3B5998'}}><i class="fa-brands fa-facebook" ></i>Continue with facebook</button>

           <button onClick={hendleGoogleSigni} className='Sigin-button-fd-g' style={{background:'#4285F4'}}><i class="fa-brands fa-google" style={{color:'#fff200'}} ></i>Continue with google</button>
           </CardContent>
           { !sigInOrUp && <p style={{color:'#7E838E' , textAlign:'center'}}>Don’t have account? <span style={{color:'#000', borderBottom:'1px solid #000', cursor:'pointer'}} ><Link to='/sigup' style={{textDecoration:'none', color:'#000'}} onClick={()=>setSigInOrUp(true)}>Sign Up</Link></span></p>}
       

           { sigInOrUp ? <p style={{color:'#7E838E' , textAlign:'center' , padding:'20px', background:'#dddd'}}> Already have account? <span style={{ borderBottom:'1px solid #000', cursor:'pointer'}} ><Link to='/sigin' style={{textDecoration:'none',color:'#000'}} onClick={()=>setSigInOrUp(false)}>Log in</Link></span></p> 

           :<p style={{color:'#7E838E' , textAlign:'center' , padding:'20px', background:'#dddd'}}> Forgot your password? <span style={{ borderBottom:'1px solid #000', cursor:'pointer'}} ><Link to='/' style={{textDecoration:'none',color:'#000'}}>Reset It</Link></span></p>
           
           
           
           }
           

        </Box>
      
    );
};

export default SignUp;
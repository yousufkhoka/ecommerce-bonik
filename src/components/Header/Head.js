import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CountyName from './CountyName';
import CountyMoney from './CountryMoney';
import  '../../images/logo.svg';

const Head = () => {
    const [countryName , setCountryName] = useState({})
    const [showcountryName ,setShowcountryName ] = useState(false)
    const [countryMoney , setCountryMoney] = useState({})
    const [showcountryMoney ,setShowcountryMoney ] = useState(false)
    const country =[
        {
            flag:'https://bonik-react.vercel.app/assets/images/flags/usa.png',
            name:'US',
            maney:'USD'
        },
        {
            flag:'https://bonik-react.vercel.app/assets/images/flags/bd.png',
            name:'BD',
            maney:'BDT'
        },
        {
            flag:'https://bonik-react.vercel.app/assets/images/flags/in.png',
            name:'HN',
            maney:'INR'
        },
        {
            flag:'https://bonik-react.vercel.app/assets/images/flags/uk.png',
            name:'UK',
            maney:'EUR'
        },
    ]
    useEffect(()=>{
       setCountryName(country[1])
       setCountryMoney(country[2])
    },[])
    const hendlesetName = country =>{
      
        setCountryName(country)
    }
    const hendlesetMoney = country =>{
        setCountryMoney(country)
    }
    

    return (
      
        <div className="head">
            <div className="container-fluid">
                <div className="row justify-content-between ">
                    <div className="col-md-5 col-2">
                        <ul className='d-lg-flex left-site d-none'>
                            <li tel='019949483099E'>  <i className='fa fa-phone'></i> 019949483038</li>

                            <li> <i className='fa fa-envelope'></i>you@gmail.com</li>
                        </ul>
                        <div className="logo d-flex d-lg-none">
                          <Link to='/'><img src='https://bonik-react.vercel.app/assets/images/logo.svg' alt="" />
                       </Link>   
                       </div>
                    </div>
                    <div className="col-md-7 col-10 d-flex justify-content-end " style={{paddingRight:'30px'}}>
                        <ul className='d-lg-flex justify-content-end right-site d-none'>
                            <li>Theme FAQ"s </li>
                            <li className='help-need'> Need Help?</li>
                        </ul>
                        <div className="country-set d-flex ">
                            <div className="country-name" style={{margin:'0 10px 0 0', cursor:'pointer' , margin:'0 10px'}} 
                            onClick={()=>setShowcountryName(!showcountryName)}>
                                <img src={countryName.flag} alt="flag" style={{borderRadius:'5px'}} />
                                <span style={{color:'#ffff', margin:'0 7px'}}>{countryName.name}</span>
                        { showcountryName ? <i style={{color:'#ffff'}} class="fa-solid fa-angle-up" 
                        ></i>  : <i style={{color:'#ffff'}} class="fa-solid fa-angle-down" 
                        ></i> }
                               {showcountryName && <div className="countryName-component">
                                <CountyName countrys={country} hendlesetName={hendlesetName}></CountyName>
                               </div>}
                            </div>
                            <div className="country-money" style={{cursor:'pointer'}}
                            onClick= {()=> setShowcountryMoney(!showcountryMoney)}>
                            <img src={countryMoney.flag} alt="flag" style={{borderRadius:'5px'}}/>
                                <span style={{color:'#ffff', margin:'0 7px'}}>{countryMoney.maney}</span>
                                { showcountryMoney ? <i style={{color:'#ffff'}} class="fa-solid fa-angle-up" 
                        ></i>  : <i style={{color:'#ffff'}} class="fa-solid fa-angle-down" 
                        ></i> }
                                 {showcountryMoney && <div className="countryMoney-component">
                                <CountyMoney countrys={country}  hendlesetMoney={hendlesetMoney}></CountyMoney>
                               </div>}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            

        </div>
       
    );
};

export default Head;
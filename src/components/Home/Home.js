import React, { useEffect, useState } from 'react';
import HeadingSlider from '../SlickSlider/HeadingSlider';
import Face3OutlinedIcon from '@mui/icons-material/Face3Outlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import PedalBikeOutlinedIcon from '@mui/icons-material/PedalBikeOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MicNoneIcon from '@mui/icons-material/MicNone';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import Shop from '../Shop/Shop';
import Header from '../Header/Header';



const Home = () => {
   
    return (
        <>
        <Header></Header>
        <div className='home-page'>
        <section className='Home-heading px-md-4' style={{paddingBottom:'130px'}} >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3 d-none d-lg-flex NavButton">
                    <ul className='shadow py-4 home-category '>
                        <li><Face3OutlinedIcon style={{margin:'0 10px'}} /> Fashion</li>
                        <li><LaptopChromebookOutlinedIcon style={{margin:'0 10px'}} /> Electronics</li>
                        <li><PedalBikeOutlinedIcon style={{margin:'0 10px'}} /> Bikes</li>
                        <li><GrassOutlinedIcon style={{margin:'0 10px'}} /> Home & Garden</li>
                        <li><CardGiftcardIcon style={{margin:'0 10px'}} /> Gifts</li>
                        <li><MicNoneIcon style={{margin:'0 10px'}} />Music</li>
                        <li><HealthAndSafetyOutlinedIcon style={{margin:'0 10px'}} />Health & Beauty</li>
                        <li><CardGiftcardIcon style={{margin:'0 10px'}} />Pets</li>
                        <li><HealthAndSafetyOutlinedIcon style={{margin:'0 10px'}} />Baby Toys</li>
                        <li><CardGiftcardIcon style={{margin:'0 10px'}} />Groceries</li>
                        <li><HealthAndSafetyOutlinedIcon style={{margin:'0 10px'}} />Automotive</li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-10  ps-lg-5">
                        <HeadingSlider></HeadingSlider>
                    </div>
                </div>
            </div>
        </section>

       <section className='px-md-4 ' style={{background:'#F6F9FC',overflow:'hidden'}}>
        <div className="container-fluid">
        <Shop></Shop>
        </div>
        </section> 
        </div>
        </>
    );
};

export default Home;
import React from 'react';
import Face3OutlinedIcon from '@mui/icons-material/Face3Outlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import PedalBikeOutlinedIcon from '@mui/icons-material/PedalBikeOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MicNoneIcon from '@mui/icons-material/MicNone';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';


const CategoryLIst = () => {
    return (
        <ul className='shadow py-4 Nav-categoryShow' >
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
                );
};

export default CategoryLIst;
import * as React from 'react';
import Card from '@mui/material/Card';




 const CountyName=({countrys,hendlesetName}) =>{
   
  return (
    <Card sx={{ minWidth:150, }}>
      
    
          <ul>
            {
                countrys.map(country =><li style={{color:'black', padding:'7px 0'}} onClick= {()=>hendlesetName(country)}>
                    <img src={country.flag} alt=""
                     style={{marginRight:'8px'}} />
                    
                    {country.name}

                </li>)
            }
          </ul>
       
      
    </Card>
  );
}

export default  CountyName ;
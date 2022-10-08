import * as React from 'react';
import Card from '@mui/material/Card';




 const CountyMoney=({countrys,hendlesetMoney}) =>{
   
  return (
    <Card sx={{ minWidth:150, }}>
      
    
          <ul>
            {
                countrys.map(country =><li style={{color:'black', padding:'7px 15px'}} onClick= {()=>hendlesetMoney(country)}>
                    <img src={country.flag} alt=""
                     style={{marginRight:'8px'}} />
                    
                    {country.maney}

                </li>)
            }
          </ul>
       
      
    </Card>
  );
}

export default  CountyMoney ;
import React from 'react';
import './BrandsList.css'

const BrandsList = () => {
    return (
       <div className="brands-list shadow">
        <h4>  Brands  <span>Shops</span></h4>
         <ul>
           <li><img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fv.png&w=32&q=75" alt="" /> mapple</li>  
           <li><img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fu.png&w=32&q=75" alt="" /> kell</li>  
           <li><img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fv.png&w=32&q=75" alt="" /> siaomi</li>  
           <li><img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fu.png&w=32&q=75" alt="" /> kasus</li>  
           <li><img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fv.png&w=32&q=75" alt="" /> sunny</li>  
           <li><img src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fu.png&w=32&q=75" alt="" /> aver</li>  
         </ul>
       </div>
      
    );
};

export default BrandsList;
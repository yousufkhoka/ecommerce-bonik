import React  from "react";
import Slider from "react-slick";
import ProductCard from '../ProductCard/ProductCard';

 const CardSlider = ({productCaterory}) => {

    const settings = {
      arrows:true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          
         
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
           
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='card-slider'>
        <h2> Flash Deals </h2>
        <Slider {...settings}>
        {
            productCaterory.map(product =><div
                > <ProductCard key={product.id} product={product}></ProductCard>
                 </div>)
           } 
          
        </Slider>
      </div>
    );
  }
  export default  CardSlider;

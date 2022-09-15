
import './SlickSlider.css'
import Slider from "react-slick";
import Button from '@mui/material/Button';
 const headingSlider = ()=> {
  
    const settings = {
      arrows:false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed:3000,
      speed: 300,
      slidesToShow: 1,
     slidesToScroll: 1 
    };

    return (
      <div className='headingSlider'>
        <Slider {...settings}>
          <div>
             <div className="row align-items-center">
                <div className="col-8 offset-lg-1 slider-text">
                    <h1 className='fw-bold ' >50% For Your First Shopping</h1>
                    <p className="text-secondary py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
                      Visit Collections</p>
                      <Button style={{background:'#E94560',fontSize:'13px'}} variant="contained"> Visit Collections</Button>
                </div>
                <div className="col-3">
                    <img className="w-100" src="https://bonik-react.vercel.app/assets/images/products/apple-watch-0.png" alt="" />
                </div>
             </div>
          </div>
          <div>
          <div className="row align-items-center">
                <div className="col-8 offset-lg-1 slider-text">
                    <h1 className='fw-bold ' >50% For Your First Shopping</h1>
                    <p className="text-secondary py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
                      Visit Collections</p>
                      <Button style={{background:'#E94560',fontSize:'13px'}} variant="contained"> Visit Collections</Button>
                </div>
                <div className="col-3">
                    <img className="w-100" src="https://bonik-react.vercel.app/assets/images/products/apple-watch-0.png" alt="" />
                </div>
             </div>
          </div>
          <div>
          <div className="row align-items-center">
                <div className="col-8 offset-lg-1 slider-text">
                    <h1 className='fw-bold ' >50% For Your First Shopping</h1>
                    <p className="text-secondary py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
                      Visit Collections</p>
                      <Button style={{background:'#E94560',fontSize:'13px'}} variant="contained"> Visit Collections</Button>
                </div>
                <div className="col-3">
                    <img className="w-100" src="https://bonik-react.vercel.app/assets/images/products/apple-watch-0.png" alt="" />
                </div>
             </div>
          </div>
          <div>
          <div className="row align-items-center">
                <div className="col-8 offset-lg-1 slider-text">
                    <h1 className='fw-bold  ' >50% For Your First Shopping</h1>
                    <p className="text-secondary py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
                      Visit Collections</p>
                      <Button style={{background:'#E94560',fontSize:'13px'}} variant="contained"> Visit Collections</Button>
                </div>
                <div className="col-3">
                    <img className="w-100" src="https://bonik-react.vercel.app/assets/images/products/apple-watch-0.png" alt="" />
                </div>
             </div>
          </div>
          <div>
          <div className="row align-items-center">
                <div className="col-8 offset-lg-1 slider-text">
                    <h1 className='fw-bold '>50% For Your First Shopping</h1>
                    <p className="text-secondary py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
                      Visit Collections</p>
                      <Button  style={{background:'#E94560',fontSize:'13px'}} variant="contained"> Visit Collections</Button>
                </div>
                <div className="col-3">
                    <img className="w-100" src="https://bonik-react.vercel.app/assets/images/products/apple-watch-0.png" alt="" />
                </div>
             </div>
          </div>
        </Slider>
      </div>
    );
  }


export default  headingSlider;
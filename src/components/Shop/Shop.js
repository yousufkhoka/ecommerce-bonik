import React, { useEffect, useState } from 'react';
import './Shop.css'
import {fakeData} from '../../fakeData/fakeData';
import ProductCard from '../ProductCard/ProductCard';
import CardSlider from '../SlickSlider/CardSlider';
import BrandsList from '../BrandsList/BrandsList';

const Shop = () => {
    const [products , setProducts] = useState([])
    const [category1 , setCategory1 ] = useState([])
    const [category2 , setCategory2 ] = useState([])
    const [category3 , setCategory3 ] = useState([])
    const [category4 , setCategory4 ] = useState([])
    const [category5, setCategory5] = useState([])
    const [category6 , setCategory6 ] = useState([])
    const [category7 , setCategory7 ] = useState([])
    const allCategory = products.map(pd => pd.category)
    const categoryList = [...new Set(allCategory)]

    const productCaterory = categoryList.map(caterory =>{
     const selegtedproduct = products.find(pd => pd.category === caterory)
         return selegtedproduct
    })
     

    useEffect(()=>{
        setProducts(fakeData) 
        setCategory1(fakeData.slice(0,10)) 
        setCategory2(fakeData.slice(11,21)) 
        setCategory3(fakeData.slice(22,32)) 
        setCategory4(fakeData.slice(33,43)) 
        setCategory5(fakeData.slice(44,54)) 
        setCategory6(fakeData.slice(55,65)) 
        setCategory7(fakeData.slice(66,76)) 
         
       },[])

   


    
    return (
          <>
        <div> 
         <CardSlider productCaterory={productCaterory}></CardSlider>
        </div>

       <div className="row mt-5">
        <div className="col-4">
        <img className='w-100' src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-1.png&w=1920&q=75" alt="" />
        </div>
        <div className="col-8">
   
            <img className='w-100' src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-2.png&w=1920&q=75" alt="" />
        </div>
       </div>



  <div className="row my-5">
    <div className="col-lg-3 col-12 col-md-8">
        <BrandsList></BrandsList>
    </div>
    <div className="col-lg-9">
        <div className="row">
        {/* <h3>{category1[0].category}</h3>       */}
          {
        category1.map(pd => <div className='col-lg-4  col-sm-6 col-12 '>
               <ProductCard product={pd}></ProductCard>
        </div>)
    }
        </div>
   
    </div>
   
  </div>
  <div className="row my-5">
    <div className="col-lg-3 col-12 col-md-8">
    <BrandsList></BrandsList>
    </div>
    <div className="col-lg-9">
        <div className="row">
        {/* <h3>{category2[0].category}</h3> */}
        {
        category2.map(pd => <div className='col-lg-4  col-sm-6 col-12 cart-hover-shadow'>
               <ProductCard product={pd}></ProductCard>
        </div>)
    }
        </div>
   
    </div>
   
  </div>
  <div className="row my-5">
    <div className="col-lg-3 col-12 col-md-8">
    <BrandsList></BrandsList>
    </div>
    <div className="col-lg-9">
        <div className="row">
        {/* <h3>{category3[0].category}</h3> */}
        {
        category3.map(pd => <div className='col-lg-4  col-sm-6 col-12 cart-hover-shadow'>
               <ProductCard product={pd}></ProductCard>
        </div>)
    }
        </div>
   
    </div>
   
  </div>
  <div className="row my-5">
    <div className="col-lg-3 col-12 col-md-8">
    <BrandsList></BrandsList>
    </div>
    <div className="col-lg-9">
        <div className="row">
        {/* <h3>{category4[0].category}</h3> */}
        {
        category4.map(pd => <div className='col-lg-4  col-sm-6 col-12 cart-hover-shadow'>
               <ProductCard product={pd}></ProductCard>
        </div>)
    }
        </div>
   
    </div>
   
  </div>
  <div className="row my-5">
    <div className="col-lg-3 col-12 col-md-8">
    <BrandsList></BrandsList>
    </div>
    <div className="col-lg-9">
        <div className="row">
        {/* <h3>{category5[0].category}</h3> */}
        {
        category5.map(pd => <div className='col-lg-4  col-sm-6 col-12 cart-hover-shadow'>
               <ProductCard product={pd}></ProductCard>
        </div>)
    }
        </div>
   
    </div>
   
  </div>
  <div className="row my-5">
    <div className="col-lg-3 col-12 col-md-8">
    <BrandsList></BrandsList>
    </div>
    <div className="col-lg-9">
        <div className="row">
        {/* <h3>{category6[0].category}</h3> */}
        {
        category6.map(pd => <div className='col-lg-4  col-sm-6 col-12 cart-hover-shadow'>
               <ProductCard product={pd}></ProductCard>
        </div>)
    }
        </div>
   
    </div>
   
  </div>
  <div className="row my-5">
    <div className="col-lg-3 col-12 col-md-8 ">
    <BrandsList></BrandsList>
    </div>
    <div className="col-lg-9">
        <div className="row">
            {/* <h3>{category7[0].category}</h3> */}
        {
        category7.map(pd => <div className='col-lg-4  col-sm-6 col-12 cart-hover-shadow'>
               <ProductCard product={pd}></ProductCard>
        </div>)
    }
        </div>
   
    </div>
   
  </div>
        </>
    );
};

export default Shop;
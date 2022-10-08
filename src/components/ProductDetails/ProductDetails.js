import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fakeData } from '../../fakeData/fakeData';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import ProductDetail from '../ProductDetail/ProductDetail';


const styleImg = {
  width:'50%'
}

const ProductDetails = () => {
    const [product ,setProduct] = useState({})
    const [products , setProducts] = useState([])
const {productId} = useParams()
console.log(productId)
console.log(product)
useEffect(()=>{
  const productItem = fakeData.find(pd => pd.id === productId )
  setProduct(productItem)
  const productsItems = fakeData.filter(pd => pd.category === product.category)
  setProducts(productsItems)
},[productId])
console.log(product)
    return (
        <>
           <Header></Header>
           <div className="container">
           <div className="py-4">
             <ProductDetail product={product} styleImg={styleImg}></ProductDetail>
           </div>
           <div className="row">
                {
                    products.map(pd =><div className='col-lg-3 '>
                        <ProductCard product={pd} key={pd.id}></ProductCard>
                        </div> )
                }
                </div>

           </div>
          
           
        </>
    );
};

export default ProductDetails;
import React from 'react'
import { FooterBanner, HeroBanner, Navbar, Product } from '../components'
import { client } from '../lib/client'
const index = ({products,bannerData}) => {
  
// console.log(products);
// console.log(bannerData[0] );
  return (
    <div>
  <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
  <div className='products-heading'>
    <h2>Best Seller Products</h2>
    <p>speaker There are many variations passages</p>
  </div>
  <div className='products-container'>
    {products?.slice(0,5).map((product)=><Product key={product._id} product={product} />)}
  </div>
  <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export default index


export const getServerSideProps=async()=>{
  const query='*[_type=="product"]';
  const products=await client.fetch(query)

  const bannerQuery='*[_type=="banner"]';
  const bannerData=await client.fetch(bannerQuery);


  return {
    props:{products,bannerData}
  }
}
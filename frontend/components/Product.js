

import React from 'react';
import ProCard from './ProCard';

async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allpro')
   
    if (!res.ok) {
    
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   

const Product = async() => {
    const data = await getData()

    console.log(data)
  return (
    <>
    <ProCard data={data}/>
    </>
    
  )
}

export default Product

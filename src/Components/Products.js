import React from 'react'
import {IndividualProducts} from './IndividualProducts'

export const Products = ({products,addToCart}) => {
  // console.log(products);
  <div className='row'></div>
  return products.map((indprod)=>(
  <IndividualProducts key={indprod.ID} indprod={indprod}
  addToCart={addToCart}/>
  )


   


  )
}
  
  


import React from 'react'
import IndividualCartProducts from './IndividualCartProducts'

export const CartProducts = ({ cartProducts,cartProductIncrease,CartProductDecrease }) => {
    return cartProducts.map((cartProduct) => (
        <IndividualCartProducts key={cartProduct.ID} cartProduct={cartProduct} CartProductDecrease={CartProductDecrease} cartProductIncrease={cartProductIncrease}/>
   ))
}
export default CartProducts


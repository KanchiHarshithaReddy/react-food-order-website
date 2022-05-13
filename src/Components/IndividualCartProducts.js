import React from 'react'
import Icon from 'react-icons-kit'
import { plus } from 'react-icons-kit/feather/plus';
import { minus } from 'react-icons-kit/feather/minus'
import {bin} from 'react-icons-kit/icomoon/bin'

import { auth, db } from '../Config/Config'
function IndividualCartProducts({ cartProduct, cartProductIncrease, CartProductDecrease }) {
  const handleCartProductIncrease = () => {
    cartProductIncrease(cartProduct);
  }
  const handleCartProductDecrease = () => {
    CartProductDecrease(cartProduct);
  }
  const handleCartProductsDelete = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        db.collection('Cart' + user.uid).doc(cartProduct.ID).delete().then(() => {
          console.log('successfully deleted')
        })
      }
    })
  }
  return (


    <div className='col-md-3' style={{ padding: "5px",backgroundColor:"black" }} >
      <div className='card' style={{ height: "38rem", width: "18rem", padding: "3px" , backgroundColor:"black"}} >
        <img src={cartProduct.ProductImg} style={{ height: "200px", width: "295px" }} alt='product-img' />
        <div className='card-body'>
          <h5 className='card-title'><b>ProductName:</b>{cartProduct.ProductName}</h5>
          <div className='card-text'><b>$</b> {cartProduct.ProductPrice}</div>
          <div className='qty'> <span ><b>Quantity</b></span></div>
          <ul >
            <div className='action-btns' onClick={handleCartProductDecrease}>
              <li><button>
                <Icon icon={minus} size={20}
                  onClick={handleCartProductDecrease}
                ></Icon></button></li>
            </div>
            <li><div style={{color:"white"}}><b>{cartProduct.qty}</b></div></li>
            <div className='action-btnss' >
              <li><button> <Icon icon={plus} size={20} onClick={handleCartProductIncrease}></Icon></button></li>

            </div>
            <li>
              <div>
                <li><Icon className='delete1' style={{color:"red",marginLeft:"20px"}} icon={bin} onClick={handleCartProductsDelete}></Icon></li></div></li></ul>
          <div className=' cart-price'><b style={{color:"white"}}>${cartProduct.TotalProductPrice}</b></div>
          {/* <div className='btnn' onClick={handleCartProductsDelete}>Delete</div> */}
        </div>
      </div>
    </div >
  )
}

export default IndividualCartProducts
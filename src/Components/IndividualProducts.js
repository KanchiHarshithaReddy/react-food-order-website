import React from 'react'

export const IndividualProducts = ({ indprod, addToCart }) => {
    // console.log(indprod);
    const handleAddToCart = () => {
        addToCart(indprod);
    }
    return (

        <div className='col-md-3' style={{ padding: "5px" ,backgroundColor:"black" }} >
            <div className='card' style={{ height: "33rem", width: "18rem", padding: "3px" , backgroundColor:"black"}} >
                <img src={indprod.ProductImg} style={{ height: "200px", width: "295px" }} alt='product-img' />
                <div className='card-body'>
                    <h5 className='card-title'><b>ProductName:</b>{indprod.ProductName}</h5>
                    <div className='card-text'><b>Rs</b>{indprod.ProductPrice}.00</div>
                    <button className='buttton' onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div >


    )
}


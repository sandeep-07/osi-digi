import React from 'react'
import "./Cart.css"
import { useStateValue } from '../StateProvider'
import CartProduct from "./CartProduct"


function Cart() {
  const [{basket},dispatch]=useStateValue()

  return (
    <div className="cart">
      <div className="cart__left">
        {
          basket?.length === 0 
            ?(
            <div>
                <h2>Your cart is empty</h2>
                <p>You have no items in your cart head over to our products and choose from the latest collections out there.Be trendy </p>
            </div>
            )
            :(
              <div>
                <h2>Procced to buy</h2>
                {
                  basket.map((item,ind)=>(
                    <CartProduct
                      key={ind}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                      subtitle={item.subtitle}
                    />
                  ))
                }
              </div>
              
            )
        }
      </div>

      
      
    </div>
  )
}

export default Cart

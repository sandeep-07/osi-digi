import React from 'react'
//import "./Order.css"
import moment from "moment"
import CartProduct from '../pages/CartProduct'
import CurrencyFormat from "react-currency-format"
function Order({order}) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item,ind)=>(
        <CartProduct
        key={ind}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        subtitle={item.subtitle}
        hideButton
      />

      ))}
      <CurrencyFormat
                  renderText={(value) => (
                  <h3 className="order__total">Order Total:{value}</h3>
                  )}
                  decimalScale={2}
                  value={order.data.amount/100}
                  thousandSeperator={true}
                  displayType={"text"}
                  prefix={"$"}
                />
    </div>
  )
}

export default Order

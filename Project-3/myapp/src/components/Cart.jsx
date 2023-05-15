import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";



const Cart = () => {
  const { cartitems ,subtotal,shipping,tax,Total } = useSelector((state) => state.Cart); // from store picking the first reducer
  
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({ type: "addToCart", payload: { id } }); // because action.payload in reducer is expecting an object so sending id single will cause  and error . so send it as an object
  
    dispatch({ type: "calculatePrice"})
  };

  const decrement = (id) => {
    dispatch({ type: "decrement", payload:  id  })
    dispatch({ type: "calculatePrice"})
  }
  const deleteHandler = (id )=>{
    dispatch({ type: "delete" , payload: id })
    dispatch({ type: "calculatePrice"})
  }

  return (
    <div className="cart">
      <main>
        {cartitems.length > 0 ? (
          cartitems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qt={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deletehandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet, Enjoy Shopping</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal: ${subtotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${Total}</h2>
      </aside>
    </div>
  );
};
const CartItem = ({
  imgSrc,
  name,
  price,
  qt,
  decrement,
  increment,
  deletehandler,
  id,
}) => (
  <div className="cartitem">
    <img src={imgSrc} alt={name} />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}> - </button>
      <p>{qt}</p>
      <button onClick={() => increment(id)}> + </button>
    </div>
    <AiFillDelete onClick={() => deletehandler(id)} />
  </div>
);



export default Cart;

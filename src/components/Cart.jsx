import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addToCart, decrement, removeFromCart } from "../featchers/cartSlice.js";
function Cart() {
  const value = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  //for the total price
  const totalPrice = value.cart.reduce((acc, product) => {
    acc += product.price * product.quantity
    return acc
  },0)

  console.log(value.cart);
  return (
    <div className='comp'>
      <h1>Total Price is: {totalPrice.toFixed(2)}$</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>Name</th>
            <th>price</th>
            <th>quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {value.cart.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.id}</td> 
                <td><img className='imageCart' src={ele.image} alt="img" /></td>
                <td>{ele.title}</td>
                <td className='text-danger'>{(ele.price * ele.quantity).toFixed(2)}$</td>
                <td>{ele.quantity } <button onClick={() => dispatch(addToCart(ele))}>+</button> <button onClick={() => dispatch(decrement(ele))}>-</button> </td>
                <td><Button className='bg-danger ' onClick={() => dispatch(removeFromCart(ele.id))}>remove</Button></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
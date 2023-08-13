/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux'
import { addToCart } from '../featchers/cartSlice';
const Cards = ({ele}) => {
    const dispatch = useDispatch();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ele.image} />
      <Card.Body>
        <Card.Title>{ele.title}</Card.Title>
        <Card.Text>
          {ele.description}
        </Card.Text>
        <Card.Text className='text-danger'>
          {ele.price}$
        </Card.Text>
        <Button variant="primary" onClick={() => dispatch(addToCart(ele))}>add to cart</Button>   {/* ele that action.payload */}
      </Card.Body>
    </Card>
  )
}

export default Cards





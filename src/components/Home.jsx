import React from 'react'
import Slider from './Slider';
import CartItem from './cart/CartItem';

const Home = (props) => {
  return (
    <div>
      <Slider/>
      <CartItem 
      item={props.item}
      overlayItems={props.overlayItems}
      setOverlayItems={props.setOverlayItems}
      />
    </div>
  )
}

export default Home
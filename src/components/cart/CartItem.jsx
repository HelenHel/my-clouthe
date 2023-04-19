import React from 'react'
import Item from './Item'
import axios from 'axios'


const CartItem = (props) => {

  const onAddOverlay = async (obj) => {
    try{
      const findOverlay = props.overlayItems.find(objOver=>objOver.myId === obj.myId)
      if(findOverlay){
        axios.delete(`https://64188a1f29e7e36438eb4749.mockapi.io/cart/${findOverlay.id}`)
        props.setOverlayItems((over) => over.filter(o=>o.myId !== obj.myId))
      } 
      else{
        const {data} = await axios.post('https://64188a1f29e7e36438eb4749.mockapi.io/cart', obj)
        props.setOverlayItems([...props.overlayItems, data])
      }
    } catch{
      alert('Произошла ошибка')
    }
  }
  
  return (
  <div>
    {
      props.item.map(obj=>{
        return(
        <Item
          key={obj.id}
          id={obj.id}
          myId={obj.myId}
          title={obj.title}
          description={obj.description}
          price={obj.price}
          img={obj.img}

          onPlus={(cartObj) =>{
              onAddOverlay(cartObj)
            }
          }

        />
        )
      })   
    }
  </div>
  )
}

export default CartItem
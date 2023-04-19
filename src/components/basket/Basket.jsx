import React from 'react'
import ItemBasket from './ItemBasket'

const Basket = (props) => {
  return (
    <div className='cartPlace'>
      {
        props.overlayProp.length>0?
        <div>
          {
            props.overlayProp.map(obj =>{
              return(
                <ItemBasket 
                key={obj.id}
                id={obj.id}
                title={obj.title}
                price={obj.price}
                img={obj.img}
                deleteItems={props.deleteItems}
                />
              )
            })
          }
        </div>
        : <h1 className='col-md-8 offset-md-2' >КОРЗИНА пуста</h1>
      }
      <div className='row' id='sum'>
        <div className='col-md-8 offset-md-2'>
          <p>ВСЕГО</p>
          <p>{props.totalPrice}</p>
          <button type='button' className='w-10 btn btn-lg btn-primary'>
            ОПЛАТИТЬ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Basket
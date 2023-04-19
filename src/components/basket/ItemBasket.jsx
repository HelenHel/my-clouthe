import React from 'react'

const ItemBasket = (props) => {
  return (
    <div className='conteiner py-3'>
      <main>
        <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
          <div className='col px-3 py-3'>
            <div className='card md-6 rounded'>
              <div className='card-header py-2 px-3' id='item'>
                <h5>{props.title}</h5>
                <img className='roundded' width={'50%'} src={props.img}></img>
                <h5>
                  <br/>
                  <span>{props.price}</span>
                </h5>
                <button type='button' className='w-100 btn btn-lg btn-outline-dark' onClick={()=> props.deleteItems(props.id)}>УБРАТЬ из корзины</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ItemBasket
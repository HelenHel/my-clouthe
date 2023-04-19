import React from 'react'

const Footer = () => {
  return (
     <div className='container'>      
        <hr/>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5'>
          <div className='col md-3' id="smils">
            <div id="boxLogo">
            <a className=''>
            <img src='img/logo.png' className='logo' width={100} height={100} />
            </a>
            </div>
            <h6>*ABORIGEN*</h6>
          </div>
          <div className='col md-4' id="smils">
            <h6>Бренды</h6>
            <ul className='nav flex-column'>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>ADIDAS</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>GUCCI</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>TOMMY HILVIGER</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>ARMANY</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>UDASHKIN</a>
              </li>
            </ul>
          </div>
          <div className='col md-4' id="smils">
            <h6>Фасон</h6>
            <ul className='nav flex-column'>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Куртки</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Платья</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Джемперы</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Костюмы</a>
              </li>
              <li className='nav-item md-3'>
                <a className='nav-link p-0 text-muted'>Брюки</a>
              </li>
            </ul>
          </div>
          <div className='nav flex-column' id="smils">
            <a className=''>
            <img src='img/t.bmp' className='smile' width={30} height={30} />
            <img src='img/tw.bmp' className='smile' width={30} height={30} />
            <img src='img/u.bmp' className='smile' width={30} height={30} />
            <img src='img/v.bmp' className='smile' width={30} height={30} />
            <img src='img/w.bmp' className='smile' width={30} height={30} />
            <img src='img/f.bmp' className='smile' width={30} height={30} />
            </a>
          </div>  
        </footer>
      </div>
    
  )
}

export default Footer
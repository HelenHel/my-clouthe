import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Slider = () => {
  return (
    <Carousel className='slider'>
      <Carousel.Item interval={1000}>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/banner-logo.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Студия мечты</h3>
          <p>Мы знаем что вам нужно! Выбор гардероба в нашей студии заставит вас почувствовать себя счастливым!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/slider1.jpeg"
          alt="1 slide"
        />
        <Carousel.Caption>
          <h3>Look со всего света</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/slider2.jpeg"
          alt="2 slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/slider4.jpg"
          alt="4 slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/slider5.jpg"
          alt="5 slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/slider6.jpg"
          alt="6 slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={600}
          className="d-block w-100"
          src="./img/slider7.jpg"
          alt="7 slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
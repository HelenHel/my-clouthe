import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import "./App.css"
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import Basket from './components/basket/Basket';


export const AppContext = React.createContext({})


function App() {

const [clouthe, setClouthe] = useState([])

const [overlayItems, setOverlayItems] = useState([])

useEffect (() => {
  async function axiosData(){
    const cloutheData = await axios.get('https://64188a1f29e7e36438eb4749.mockapi.io/clouthe')
    const cartData = await axios.get('https://64188a1f29e7e36438eb4749.mockapi.io/cart')
    setClouthe(cloutheData.data)
    setOverlayItems(cartData.data)
  }
  axiosData();
},[])

  const deleteItems = (id) =>{
    axios.delete(`https://64188a1f29e7e36438eb4749.mockapi.io/cart/${id}`);
    setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !== id));
  }
  const isAdded = (myId) =>{
    return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
  }
  
  return (
    <AppContext.Provider
    value={
      {
        clouthe,
        setClouthe,
        overlayItems,
        setOverlayItems,
        isAdded
      }
    }>
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/'
            element={
              <Home 
              item={clouthe}
              overlayItems={overlayItems}
              setOverlayItems={setOverlayItems}
              />
            } 
          />
          <Route path='/cart'
            element={
              <Basket
              totalPrice={
                overlayItems.reduce((element = overlayItems.length, obj) => element + (+ obj.price), 0)
              }
              overlayProp={overlayItems}
              deleteItems={deleteItems}
              />
            } 
          />     
        </Routes>
      </Router>
      <Footer/>
    </div>
    
    </AppContext.Provider>
  );
}

export default App;

import './homescreen.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, [])

  // IF LOADING DISPLAY
  return loading ? <div> Loading...</div> :
    error ? <div>{error}</div> :
      // IF NOT DISPLAY STORE FRONT 

      <div className="storeFrontdiv">
        <div className="contentDiv">
          <div className="content">

            <img src="/images/ItemShopStoreFront.png"></img>

          </div>

          <div className="homepageButts">
            <button className="priceFilterbutt">Price Low-High</button>
            <button className="ratingFilterbutt">Rating High-Low</button>
          </div>
        </div>


      </div>
}
export default HomeScreen;
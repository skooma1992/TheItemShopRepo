import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import './allitems.css'
import Rating from '../components/Rating';



function AllItems(props) {

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
      // IF NOT DISPLAY PRODUCT LIST 
      <div className="itemsDiv">
        
        <div className="products">
          {
            products.map(product =>
              <div key={product._id}>
                <div className="product">
                  <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"></img></Link>
                  <div className="productInfo">
                    <div className="product-name">
                      <Link to={'/product/' + product._id}>{product.name}</Link></div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">
                      <Rating value = {product.rating} text={product.numReviews + ' reviews'}
                      /></div>
                  </div>
                </div>
              </div>
            )
          }


        </div>

      </div>

}
export default AllItems;
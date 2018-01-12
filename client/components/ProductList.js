import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const ProductList = (props) => {
  const products = props.products

  return (
    <div>
      <h3>Welcome to the Products Page!</h3>
      {products.map((product) => {
        return (
          <li
          key={product.id} >
            <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: 'none' }}
            >
              <img
              id="product-pic"
              src={product.imgURL}
              />
              <h3>
              {product.name}
              </h3>
              <h3>
              ${product.price}
              </h3>
            </Link>
            <button onClick={addToCart}>
              Add to Cart
              </button>
          </li>
        )
      }
      )}
    </div>
  )
}


const mapState = (state) => {
  return {
    products: state.products
  }
}


export default connect(mapState)(ProductList)




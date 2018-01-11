import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'


/**
 * INITIAL STATE
 */
// const defaultPRODUCTS = {}

/**
 * ACTION CREATORS
 */
const getProductsActionCreator = products => ({type: GET_PRODUCTS, products})


/**
 * THUNK CREATORS
 */

// export const getProducts = () =>
//   async (dispatch) =>
//     try {
//       const res = await axios.get('/api/products/')
//       const result  = await res.data
//       dispatch(getProductsActionCreator(result))
//     }
//     catch (error) {
      // handle error
    // }
    export const getProducts = () =>
    dispatch =>
      axios.get('/api/products/')
        .then(res => res.data)
        .then(result => {
          dispatch(getProductsActionCreator(result))
        })
        .catch(err => console.log(err))
/**
 * REDUCER
 */
export default function (products = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return products
  }
}

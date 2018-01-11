import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import users from './users'
import product from './product'
import products from './products'
import reviews from './reviews'
import address from './address'
import adminUser from './adminUser'


const reducer = combineReducers({user, users, product, products, reviews, adminUser, address})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './adminUser'
export * from './users'
export * from './product'
export * from './products'
export * from './reviews'
export * from './address'



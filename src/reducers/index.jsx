import { combineReducers } from 'redux';
import products from './products';
import editProduct from './editProduct';

const reducers = combineReducers({
  products,
  editProduct
});

export default reducers;
import * as Types from './../constants/ActionTypes';

var initialState = {};

const editProduct = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_PRODUCTS:
      console.log(action.product)
      return action.product;
    default: return state;
  }
}

export default editProduct;
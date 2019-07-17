import * as Types from './../constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCTS:
      state = state.filter(id => {
        return id.id !== action.id;
      });
      return [...state];
    case Types.ADD_PRODUCTS:
      state.push(action.product);
      return [...state];
    case Types.UPDATE_PRODUCTS:
      state.forEach((id, index) => {
        if (id.id === action.product.id) {
          state[index] = action.product
        }
      });
      return [...state];
    default: return state;
  }
}

export default products;
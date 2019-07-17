import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const fetchProductsRequest = () => {
  return (dispatch) => {
    return callApi('product', 'GET', null).then(res => {
      dispatch(fetchProducts(res.data))
    })
  }
}

export const fetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}

export const deleteProductsRequest = (id) => {
  return dispatch => {
    return callApi(`product/${id}`, 'DELETE', null).then(res => {
      dispatch(deleteProducts(id))
    })
  }
}

export const deleteProducts = (id) => {
  return {
    type: Types.DELETE_PRODUCTS,
    id
  }
}

export const addProductsRequest = (product) => {
  return dispatch => {
    return callApi('product', 'POST', product).then(res => {
      dispatch(addProducts(res.data))
    })
  }
}

export const addProducts = (product) => {
  return {
    type: Types.ADD_PRODUCTS,
    product
  }
}

export const editProductsRequest = (id) => {
  return dispatch => {
    return callApi(`product/${id}`, 'GET', null).then(res => {
      dispatch(editProducts(res.data))
    })
  }
}

export const editProducts = (product) => {
  return {
    type: Types.EDIT_PRODUCTS,
    product
  }
}

export const updateProductRequest = product => {
  return dispatch => {
    return callApi(`product/${product.id}`, 'PUT', product).then(res => {
      dispatch(updateProduct(res.data))
    })
  }
}

export const updateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCTS,
    product
  }
}
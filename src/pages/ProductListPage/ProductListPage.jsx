import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProducItem from './../../components/ProductItem/ProductItem';

class ProductListPage extends Component {
  state = {}
  render() {
    var product = [];
    return (
      <div className="col-12">
        <button type="button" className="btn btn-primary">Add Product</button>
        <ProductList>
          {this.showProductItem(product)}
        </ProductList>
      </div>
    );
  }
  showProductItem = (product) => {
    var result = null;
    if (product.length > 0) {
      result = product.map((product, index) => {
        return <ProducItem
          key={index}
          product={product}
          index={index}
        />
      })
    }
    return result;
  }
}

export default ProductListPage;

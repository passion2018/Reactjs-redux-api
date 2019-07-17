import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProducItem from './../../components/ProductItem/ProductItem';
// import callApi from './../../utils/apiCaller';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductsRequest, deleteProductsRequest } from './../../actions/index';

class ProductListPage extends Component {


  componentDidMount() {
    this.props.fetchAllProducts();
  }

  onDelete = id => {
    this.props.onDeleteProducts(id);
  }

  render() {
    const { products } = this.props;

    return (
      <div className="col-12">
        <Link to="/product/add" className="btn btn-warning text-white">Thêm sản phẩm</Link>
        <ProductList>
          {this.showProductItem(products)}
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
          onDelete={this.onDelete}
        />
      })
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(fetchProductsRequest())
    },
    onDeleteProducts: (id) => {
      dispatch(deleteProductsRequest(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);

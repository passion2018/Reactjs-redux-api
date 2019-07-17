import React, { Component } from 'react';
// import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { addProductsRequest, editProductsRequest, updateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends Component {
  state = {
    id: '',
    txtName: '',
    txtPrice: '',
    checkStatus: false
  }

  componentDidMount() {
    console.log("componentDidmount");
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        checkStatus: itemEditing.status
      })
    }
  }

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSave = e => {
    e.preventDefault();
    var { id, txtName, txtPrice, checkStatus } = this.state;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: checkStatus
    }
    if (this.state.id) {
      // callApi(`product/${this.state.id}`, 'PUT', {
      //   name: this.state.txtName,
      //   price: this.state.txtPrice,
      //   status: this.state.checkStatus
      // }).then(res => {
      //   this.props.history.goBack();
      // })
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProducts(product);
    }
    this.props.history.goBack();
  }

  render() {
    const { txtName, txtPrice, checkStatus } = this.state;
    return (
      <div className="col-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Giá</label>
            <input
              type="text"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name="checkStatus"
                checked={checkStatus}
                value={checkStatus}
                onChange={this.onChange}
              />
              Còn hàng
          </label>
          </div>
          <Link to="/product-list" className="btn btn-danger mr-2">Trở về</Link>
          <button
            type="submit"
            className="btn btn-primary"
          >Lưu lại</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.editProduct
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProducts: (product) => {
      dispatch(addProductsRequest(product))
    },
    onEditProduct: (id) => {
      dispatch(editProductsRequest(id))
    },
    onUpdateProduct: (product) => {
      dispatch(updateProductRequest(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
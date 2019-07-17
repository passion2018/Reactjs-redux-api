import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {


  onDelete = (id) => {
    if (window.confirm('Ban co chac chan muon xoa?')) {
      this.props.onDelete(id);
    }
  }

  state = {}
  render() {
    const { product, index } = this.props;
    const statusName = product.status ? "Còn hàng" : "Hết hàng";
    const statusClass = product.status ? "primary" : "danger";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td><span className={`p-2 badge badge-${statusClass}`}>{statusName}</span></td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className="btn btn-danger mr-2"
          >Sửa</Link>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.onDelete(product.id)}
          >Xóa</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
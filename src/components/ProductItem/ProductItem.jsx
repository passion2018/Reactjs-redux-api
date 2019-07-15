import React, { Component } from 'react';


class ProductItem extends Component {
  state = {}
  render() {
    const { product, index } = this.props;
    const statusName = product.status ? "True" : "False";
    const statusClass = product.status ? "primary" : "danger";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><span class={`badge badge-${statusClass}`}>{statusName}</span></td>
        <td>
          <button type="button" class="btn btn-danger mr-2">Edit</button>
          <button type="button" class="btn btn-primary">Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
import React, { Component } from 'react';

class ProductList extends Component {
  state = {}
  render() {
    return (
      <div className="card mt-4 text-white">
        <div className="card-header bg-danger">
          Danh sách sản phẩm
      </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
import React, { Component } from 'react';

class ProductList extends Component {
  state = {}
  render() {
    return (
      <div className="card mt-4 text-white">
        <div className="card-header bg-primary">
          List product
      </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
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
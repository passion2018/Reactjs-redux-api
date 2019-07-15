import React, { Component } from 'react';

class ProductActionPage extends Component {
  state = {}
  render() {
    return (
      <div className="col-6">
        <h1>Add Product</h1>
        <div className="form-group">
          <label>Name Product</label>
          <input type="text" name="" id="" className="form-control" />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input type="text" name="" id="" className="form-control" />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" />
            True
          </label>
        </div>
        <button type="button" className="btn btn-danger mr-2">Back</button>
        <button type="button" className="btn btn-primary">Save</button>
      </div>
    );
  }
}

export default ProductActionPage;
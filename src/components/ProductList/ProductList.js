import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem';
export default class ProductList extends Component {
    render() {
        return (
            <div className="panel-body">
                    
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Mã</th>
                          <th>Tên</th>
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
        )
    }
}

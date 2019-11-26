import React, { Component } from 'react'
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';
export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">              
              <button type="button" className="btn btn-info mb-10">Thêm sản phẩm</button>              
              <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Danh sach sản phẩm 123</h3>
                  </div>
                  <ProductList />
              </div>
                          
            </div>            
          </div>      
        </div>
      </div>
     
      
    )
  }
}

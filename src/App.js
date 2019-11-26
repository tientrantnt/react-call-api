import React, {Component} from 'react'
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';
import routes from './routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu/>
          <div className="container">
            <div className="row">
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">Thêm sản phẩm</button>
              <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Danh sach sản phẩm</h3>
                  </div>
                  <ProductList />
              </div>

            </div>             */}
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>

      </Router>

    )
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
        )

      });
    }
    return <Switch>{result}</Switch>
  }
}

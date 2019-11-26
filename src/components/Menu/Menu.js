import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom';

const menus = [
  {
    name : 'Trang Chủ',
    to:'/',
    exact : true
  },
  {
    name : 'Quản lý sản phẩm',
    to:'/product-list',
    exact : true
  }
];

const MenuLink = ({label,to,activeOnlyWhenExact})=>{
  return <Route 
    path={to}
    exact={activeOnlyWhenExact}
    children = {({match})=>{
      var active = match ? 'active' : ''
      return 
      <li className={active}>
        <Link to={to}>
          {label}
        </Link>
      </li>    
    }}
  />
};
export default class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">CALL API</a>
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </div>
    )
  }
  showMenus  = (menus) =>{
    var result = null;
    if(menus.length > 0){
      return <MenuLink 
        
      />
    }
    return result;
  }
}

import React, {Component} from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">CALL API</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href={"/"}>Trang chủ</a>
          </li>
          <li>
            <a>Quản lý sản phẩm1</a>
          </li>
        </ul>
      </div>
    )
  }
}

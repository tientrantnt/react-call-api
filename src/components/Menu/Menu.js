import React, {Component} from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">CALL API</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Trang chủ</a>
          </li>
          <li>
            <a>Quản lý sản phẩm</a>
          </li>
        </ul>
      </div>
    )
  }
}

import React, {Component} from 'react'

export default class ProductItem extends Component {
  onDelete = (id) =>{
    if(window.confirm('Ban co muon xoa')){
      this.props.onDelele(id);
    }
  }
  render() {
    var {product , index} = this.props;
    var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
    var statusClass = product.status ? 'warning' : 'default';
    return (
      <tr>
        <td>{index + 1 }</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>
            {statusName}
          </span>
        </td>
        <td>
          <button type="button" className="btn btn-success mr-10">Sửa</button>
          <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(product.id)}>Xóa</button>
        </td>
      </tr>
    )
  }
}

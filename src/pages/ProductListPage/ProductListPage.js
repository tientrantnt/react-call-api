import React, {Component} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
export default class ProductListPage extends Component {
  render() {
      var products = [];
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <button type="button" className="btn btn-info mb-10">Thêm sản phẩm</button>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Danh sach sản phẩm</h3>
            </div>
            <ProductList> 
                {this.showProducts(products)}
            </ProductList>
          </div>

        </div>
      </div>
    )
  }
  showProducts = (products) =>{
      var result = null;
      if(products.length > 0){
        result = products.map((product , index)=>{
            return <ProductItem key={index} product = {product} index = {index}/>
        });
      }
      return result;
  }
}

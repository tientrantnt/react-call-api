import React, {Component} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : []
    };
  }
  componentDidMount () {
    callApi('products','GET',null).then((res)=>{
      this.setState({
        products : res.data
      })
    });
  }
  onDelele = (id) =>{
    var {products} = this.state;   
    callApi(`products/${id}`,'DELETE',null).then((res)=>{
      if(res.status === 200){
        var index = products.findIndex( index => index.id === id);
        if(index !== -1){
          products.splice(index,1);
          this.setState({
            products : products
          })
        }
      }
      
      
    });
  }
  render() {      
    var {products} = this.state;     
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to={"product/add"} className="btn btn-info mb-10">Thêm sản phẩm</Link>
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
            return <ProductItem key={index} product = {product} index = {index} onDelele = {this.onDelele}/>
        });
      }
      return result;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps,null)(ProductListPage);
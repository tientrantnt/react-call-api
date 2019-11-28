import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = (id) => {
   return (dispatch) => {
        
    return callApi('products','GET',null).then((res)=>{           
             dispatch(actFetchProducts(res.data))
        });
   }
}
export const actDeleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`,'DELETE',null).then((res)=>{
      if(res.status===200){
        dispatch(actDeleteProduct(id));
      }                          
    });
  }
  
}
export const actAddProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`products`,'POST',product).then((res)=>{
      if(res.status===201){
        dispatch(actAddProduct(res.data));
      }                       
    });
  }
  
}
export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`,'GET',null).then((res)=>{   
        dispatch(actGetProduct(res.data));                           
    });
  }
  
}
export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`,'PUT',product).then((res)=>{
      if(res.status===200){
        dispatch(actUpdateProduct(res.data));
      }                          
    });
  }
  
}

export const actFetchProducts = (products) => ({
  type: Types.FETCH_PRODUCTS,
  products
});
export const actAddProduct = (product) => ({
  type: Types.ADD_PRODUCT,
  product
})

export const actDeleteProduct = (id) => ({
  type: Types.DELETE_PRODUCT,
  id
});
export const actGetProduct = (product) => ({
  type: Types.EDIT_PRODUCT,
  product
})

export const actUpdateProduct = (product) => ({
  type: Types.UPDATE_PRODUCT,
  product
});
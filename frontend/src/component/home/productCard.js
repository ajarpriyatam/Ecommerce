import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
const options = {
    edit:false,
    color:"rgba(20,20,20,0.1",
    activecolor:"tomoto",
    size:window.innerWidth<600?20:25,
    value:2.5,
    isHalf:true
};
const Url = "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwe5657e68/original/90_E72HAHT03-ECJ03T_EG89_10_V-EmblemT-Shirt-T-shirtsandSweatshirts-versace-online-store_0_1.jpg?sw=450&sh=632&sm=fit&sfrm=jpg"
const Productcard=({product}) =>{
    let productname= product.name
    if(productname.length > 45){
        productname = `${productname.slice(0,45)}...`
    }
    return (
    <>
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={Url} alt={productname} />
      <div className='head'>
        <div className='heading'>
          <h4>{productname}</h4>
          <h3>{product.category}</h3>
          <h4><span>{`₹${product.price}`}</span></h4>
          <p>Free Delivery</p>
        </div>
      </div>
    </Link>
    </>
  )
}

export default Productcard;
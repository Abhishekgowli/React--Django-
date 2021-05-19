import React ,{useState} from 'react';
import Imagehelper from '../core/helper/imagehelper'
import {Redirect} from 'react-router-dom'
import {addItemToCart,loadCart,removreItemFromCart,cartEmpty} from '../core/helper/carthelper'
import { isAuthenticate } from '../auth/helper';

const Card = ({product,
  addtoCart=true,
  removeFromCart=false,
  reload=undefined,
  setReload=(f)=>f,
}) => {
  const [redirect, setredirect] = useState(false)
    const carttitle=product?product.name:"A photo from Default"
    const cartdescripation=product?product.descripation:"Default descripation"
    const cartprice=product?product.price:"Default Price"
    
    const addToCart=()=>{
      if(isAuthenticate()){
        addItemToCart(product,()=>setredirect(true))
        console.log("Added to Cart");
      }else{
        console.log("Login plz");
      }
    }
    const getAredirect = (redirect) => {
      if (redirect) {
        return <Redirect to="/cart" />;
      }
    };
    

    const showAddToCart = (addToCart) => {
      return (
        addtoCart && (
          <button
            onClick={addToCart}
            className="btn btn-block btn-outline-success mt-2 mb-2"
          >
            Add to Cart
          </button>
        )
      );
    };


    const showRemoveFromCart=(removeFromCart)=>{
      return(
        removeFromCart &&(
          <button
                onClick={() => {
                  removreItemFromCart(product._id)
                  setReload(!reload);
                  console.log("product removed from cart")
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
          
        )
      )
    }



    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{carttitle}</div>
        <div className="card-body">
          {getAredirect(redirect)}
          <Imagehelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartdescripation}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">&#8377;{cartprice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Card;
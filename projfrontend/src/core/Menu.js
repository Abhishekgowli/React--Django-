import React,{Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import { singout,isAuthenticate } from '../auth/helper'
const controlTab=(history,path)=>{
  if(history.location.pathname===path){
      return{color:"#2ecc72"}

  }
  else{
      return{color:"#FFFFFF"}
  }

}
const Menu=(history,path)=> {

    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
          <Link
            style={controlTab(history, "/")}
            className="nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        {isAuthenticate()&&(
          <li className="nav-item">
          <Link
            style={controlTab(history, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        )}
        {isAuthenticate()&&(
          <li className="nav-item">
          <Link
            style={controlTab(history, "/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        </li>
        )}
        {!isAuthenticate()&&(
          <Fragment>
            <li className="nav-item">
          <Link
            style={controlTab(history, "/singup")}
            className="nav-link"
            to="/singup"
          >
            singup
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={controlTab(history, "/singin")}
            className="nav-link"
            to="/singin"
          >
            SignIn
          </Link>
        </li>
          </Fragment>
        )}
        {isAuthenticate()&&(
          <li className="nav-item">
          <span
            onClick={() => {
              singout(() => {
                history.push("/")
              });
            }}
            className="nav-link text-warning"
          >
            Signout
          </span>
        </li>
        )}
                 
            </ul>
            
        </div>
    )
}
export default withRouter(Menu)
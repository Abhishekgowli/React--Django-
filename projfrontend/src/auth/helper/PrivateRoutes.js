import React from 'react'
import { isAuthenticate } from './index';
import {BrowserRouter,
    Switch,
    Route, Redirect} from "react-router-dom"; 
import Dashboard from '../../user/Dashboard';
  

 const PrivateRoutes=({ component: Component, ...rest }) =>{
    return (
        <Route
          {...rest}
          render={(props) =>
            isAuthenticate() ? (
              <Component {...props}/>
            ) : (
              <Redirect
                to={{
                  pathname: "/singin",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );
}
export default PrivateRoutes
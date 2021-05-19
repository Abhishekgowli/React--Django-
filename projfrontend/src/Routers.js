import React from "react";
import {BrowserRouter,
Switch,
Route} from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Cart from "./core/Cart";
import Home from "./core/Home"
import Dashboard from "./user/Dashboard";
import Singin from "./user/Singin";
import Singup from './user/Singup'




function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/singup" component={Singup}/>
            <Route exact path="/singin" component={Singin}/>
            <Route exact path="/cart" component={Cart}/>

            <PrivateRoutes path="/user/dashboard" exact component={Dashboard} />
        
            
        </Switch>
        </BrowserRouter>
    )
}
export default Routes
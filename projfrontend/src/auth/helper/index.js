import {API} from  "../../backend"
import { cartEmpty } from "../../core/helper/carthelper"

export const singup=(user)=>{
    return fetch(`${API}user/`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            'Authorization': 'Basic '+btoa('gowleabhi@gmail.com:admin'), 
            
            

        },
        body: JSON.stringify(user)
    })
    .then((responce)=>{
        return responce.json()
    })
    .catch((err)=>console.log(err))
}

export const singin=(user)=>{
    const formData=new FormData()
    for(const name in user){
        formData.append(name,user[name])
    }
    for (var key of formData.keys()) {
    console.log("MYKEY: ", key);
  }
    return fetch(`${API}user/login/`,{
        method:"POST",
        body:formData
    })
    .then((responce)=>{
        console.log("SCUSSES",responce)
        return responce.json()
        
    })

}
export const authenticate=(data,next)=>{
    if(typeof window!=undefined){
        localStorage.setItem("jwt",JSON.stringify(data))
        next()
    }

}
export const isAuthenticate=()=>{
    if(typeof window==undefined){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false
    }
}

export const singout = (next) => {
    const userId = isAuthenticate() && isAuthenticate().user.id;
  
    console.log("USERID: ", userId);
  
    if (typeof window !== undefined) {
      localStorage.removeItem("jwt");
      cartEmpty(() => {});
      //next();
  
      return fetch(`${API}user/logout/${userId}/`, {
        method: "GET",
      })
        .then((response) => {
            response.json()
          console.log("Signout success");
          next();
        })
        .catch((err) => console.log(err));
    }
  };
  
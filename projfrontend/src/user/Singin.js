import React, {useState} from 'react'
import Base from '../core/Base'
import{Link, Redirect} from 'react-router-dom'
import{singin,authenticate,isAuthenticate} from '../auth/helper/index'
import { loadCart } from '../core/helper/carthelper'

const Singin=()=>{
    const [values, setValues] = useState({
        name:"",
        email:"sagarauto@gmail.com",
        password:"1234",
        error:"",
        success:false,
        loading:false,
        didRedirect:false

    });
    const {name,email,password,error,success,loading,didRedirect}=values

    const handleChange = (name) =>
    (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    
    const onsumit=(event)=>{
        event.preventDefault()
        setValues({...values,error:false,loading:true})
        singin({email,password})
        .then((data)=>{
            console.log("DATA",data)
            if(data.token){
               // let session_token=data.token;
                authenticate(data,()=>{
                    console.log("TOKEN ADDED");
                    setValues({
                        ...values,didRedirect:true,
                    })
                })
            }else{
                setValues({
                    ...values,
                    loading:false,
                })
            }




        })
        .catch((e)=>console.log(e))

    }
    const performRedirect=()=>{
        if(isAuthenticate()){
            return(
                <Redirect to="/"/>
            )
        }
    }
    const loadingMessage=()=>{
        return(
            loading&&(
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }






    const SuccessMessage=()=>{
        return(
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success" style={{display:success?"":"none"}}>
                    new Account is created<Link to="/singin">Login Page</Link>
                </div>
    
            </div>
        </div>
        )
    }
    const ErrorMessage=()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"style={{display:error ?"":"none"}}>
                        Check All Fields
    
                    </div>
                </div>
    
            </div>
        )
    }
    
     const SingUpFrom=()=>{
         return(
             
             <div className="col-md-6 offset-sm-3 text-left">
                 <form>
                     <div className="from-group">
                         <label className="text-light">Email</label>
                         <input 
                         className="form-control"
                         value={email}
                         onChange={handleChange("email")}
                         type="text"
                         />
                     </div>
                     <div className="from-group">
                         <label className="text-light">Password</label>
                         <input 
                         className="form-control"
                         value={password}
                         onChange={handleChange("password")}
                         type="text"     
                         />
                     </div>
                     <div className="from-group">
                     <button className="btn btn-success btn-block mt-3" onClick={onsumit} >Submit</button>
                     </div>
                     
                 </form>
             </div>
         )
     }
     return (
        <Base title="Sing To webstore" descipation="To get the best Tshirts">
            <h1>Sing in Page</h1>
                {loadingMessage()}
                {SingUpFrom()}
                <p>{JSON.stringify(values)}</p>
                {performRedirect()}
        </Base>
    )




}















    
export default Singin
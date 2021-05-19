import React,{useState} from 'react'
import{singup} from '../auth/helper/index'
import Base from '../core/Base'
import{Link} from 'react-router-dom'

 const Singup=()=> {
     const [values, setValues] = useState({
         name:"",
         email:"",
         password:"",
         error:"",
         success:false

     });
     const {name,email,password,error,success}=values
     const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };


    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values,error:false})
        singup({name,email,password})
        .then((data)=>{
            console.log("Data",data);
            if(data.email===email){
                setValues({
                    ...values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true,
                })
            }else{
                setValues({
                    ...values,
                    error:true,
                    success:false
                })
            }
        })
        .catch((e)=>console.log(e))
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
                         <label className="text-light">Name</label>
                         <input 
                         className="form-control"
                         value={name}
                         onChange={handleChange("name")}
                         type="text"
                         />
                     </div>
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
                     <button className="btn btn-success btn-block mt-3" onClick={onSubmit}>Submit</button>
                     </div>
                     
                 </form>
             </div>
         )
     }
    return (
        <Base title="Singup Page" descipation="The Sing up Page for Login">
            <h1>Singup</h1>
            {SuccessMessage()}
            {ErrorMessage()}
            {SingUpFrom()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    )
}
export default Singup

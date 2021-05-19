import React from 'react'
import Menu from './Menu'

 
  const Base=({title="mytitle",descipation="mydescripation",className="bg-dark text-white text-center p-4",children})=> {
     return (

         <div>
             <Menu/>
             <div className="continer-fluid">
                 <div className="jumbotron bg-dark text-white text-center">
                     <h2 className="display-4"  >  {title} </h2>
                     <p className="lead">{descipation}</p>
                 </div>
                 <div className={className}>{children}</div>
             </div>
             
             <footer className="fotter bg-dark mt-auto py-3">
                 <div className="continer-fluid bg-success text-white text-center py-3">
                     <h5 className="lead"> Any queries Please Contact us </h5>
                     <button className="btn btn-warning btn-lg">Contact us</button>
                     <div className="container">
                         <span className="text-warning">Amazaning Django Full Stack web site</span>

                     </div>

                 </div>
             </footer>
         </div>
     )
 }
 export default Base
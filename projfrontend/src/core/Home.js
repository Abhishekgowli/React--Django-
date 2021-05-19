import React,{useState,useEffect} from 'react'
import{getProducts} from '../core/helper/CoreapiCalls'
import Base from'../core/Base'
import '../styles.css'
import Card from '../core/Card'

 function Home() {
     const [products,setProducts] = useState([])
     const [error, setError] = useState(false)
     const loadAllProducts = () => {
        getProducts()
          .then((data) => {
            if (data.error) {
              setError(data.error);
              console.log(error);
            } else {
              setProducts(data);
            }
          });
      };
     useEffect(() => {
        loadAllProducts();
      }, []);
    return (
        <Base title="Home Page" descipation="welcome to Bhavani Fashion Store">
          <h1>Home Component</h1>
            <div className="row">
                {products.map((product,index)=>{
                    return(
                        <div   className="col-4 md-4" key={index}>
                        <Card product={product}/>
                        

                    </div>
                    );
                })}
                

            </div>
            
            

            
        </Base>
    )
}
export default Home;
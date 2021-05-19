import React,{useState,useEffect} from 'react'
import Base from '../core/Base'
import Card from './Card'
import { loadCart } from './helper/carthelper'
import PaymentB from './PaymentB'

const  Cart=()=> {
    const [products, setproducts] = useState([])
    const [reload, setReload] = useState(false);
    useEffect(() => {
        setproducts(loadCart())
       
    }, [reload])
    const loadAllProducts=(products)=>{
        return(
            <div>
                {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            reload={reload}
            setReload={setReload}
            
          />
        ))}
            </div>
        )
    }
    const loadCheckOut=()=>{
        return(
            <div>
                <h1>CheckOut</h1>
            </div>
        )
    }
    return (
        <Base title=" Cart Page" descipation="Add the Cart Items to the Cart">
            <div className="row text-center">
                <div className="col-6">
                    {loadAllProducts(products)}
                </div>
                <div className="col-6">
                    { products.length>0 ?(
                        <PaymentB
                        products={products}
                        setReload={setReload}
                        />
                    ):(
                        <h3>Please login or add some items in the cart</h3>
                    )}
                </div>
            </div>
        </Base>
    )
}
export default Cart
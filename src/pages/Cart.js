import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import CartItem from '../components/Cartitem';
 const Cart = ()=>{
    const {cart} = useSelector((state)=>state);
    const [totalAmount,setTotalAmount] = useState(0);
    useEffect(()=>{
       // reduce() method is used to reduce the array to a single value and executes a provided function for each value of the array and the return value of the function is stored in an accumulator
        setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0));
    },[cart])
    return(
        <div>
        {
            cart.length > 0 ? (
                <div>
                    <div>
                    {
                        cart.map((item,index)=>{
                            return <CartItem key={item.id} item = {item} itemIndex={index}/>
                        })
                    }
                    </div>
                    <div>
                       <div>
                            <div>Your Cart</div>
                            <div>Summary</div>
                            <p>
                                <span>Total Items : {cart.length}</span>
                            </p>
                       </div> 
                       <div>
                          <p>Total Amount: ${totalAmount}</p> 
                          <button>CheckOut Now</button>
                       </div>   
                    </div>  
                </div>
            )
            : 
            (
                <div>
                   <h1>Cart Empty</h1>
                   <Link to={"/"}>
                      <button>Shop Now</button>
                   </Link>
                </div>
             
            )
        }
        </div>
    )
}
export default Cart;
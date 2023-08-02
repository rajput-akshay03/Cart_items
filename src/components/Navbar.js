import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
 const Navbar = ()=>{
    const {cart} = useSelector((state)=>state);
    return(
        <div>
            <div className='navbar'>
                <NavLink to="/" className="navlink">
                     <p>Home</p>
                </NavLink>  
                 <NavLink to='/cart' className="navlink">
                     <AiOutlineShoppingCart />
                    {cart.length}
                </NavLink>   
            </div>
        </div>
    )
}
export default  Navbar;
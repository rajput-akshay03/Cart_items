import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
 const Navbar = ()=>{
    return(
        <div>
            <div className='navbar'>
                <NavLink to="/" className="navlink">
                     <p>Home</p>
                </NavLink>  
                 <NavLink to='/cart' className="navlink">
                     <AiOutlineShoppingCart />
                </NavLink>   
                   
            </div>
        </div>
    )
}
export default  Navbar;
import { toast } from 'react-hot-toast';
import{AiTwotoneDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { add,remove } from '../redux/Slices/CartSlice';
const CartItem = ({item,itemIndex})=>{
    const dispatch = useDispatch();
    const removeFromCart = ()=>{
           dispatch(remove(item.id));
           toast.success("Item removed")
    }
      return (
        <div>
            <div>
                <div>
                    <img src={item.image}/>
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <div>
                        <p>{item.price}</p>
                        <div onClick={removeFromCart}><AiTwotoneDelete/></div>
                    </div>
                </div>

            </div>
        </div>
      )
}
export default CartItem;
import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"
import Product from "../components/Product"
import "./Home.css"
 const Home = ()=>{
    const url = "https://fakestoreapi.com/products"
    const [loading,setLoading] = useState(true)
    const [Posts,setPosts] = useState([]);
    async function fetchdata(){
        setLoading(true)
        try{
              const res =await fetch(url);
              const data = await res.json();
              setPosts(data);
        }
        catch{
            console.log("error")
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchdata();
    },[])
    return(
        <div>
            {
                loading ? <Spinner /> :
                Posts.length>0 ? (
                   <div className="card">
                      {
                        Posts.map((post)=>
                        ( <Product key= {post.id} post={post} />))
                      } 
                    </div>
                   
                ): <div><p>no data found</p></div>
            }
        </div>
    )
}
export default Home;
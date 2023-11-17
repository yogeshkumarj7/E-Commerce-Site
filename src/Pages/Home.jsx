import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
function Home(){
    const [loading,setLoading]=useState(false);      
    const[posts,setPost]=useState([]);
    async function fetchData(){      
        setLoading(true);    
        const API_URL="https://fakestoreapi.com/products";        
        try{
            const result=await fetch(API_URL);      
            const data=await result.json();       
            console.log(data);
            setPost(data);
        }catch(error){
            console.log("Error Occoured"); 
               setPost([]);  
            } 
        setLoading(false);                  
    } 
    useEffect(()=>{
        fetchData();  
    },[])        
    return(
        <div>  
            {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="font-bold">No Data Found</p>
        </div> 
      }
        </div>
        
    )
}
export default Home;       
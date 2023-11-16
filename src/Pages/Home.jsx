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
                loading ? (<Spinner/>):posts.length >0 ? ({
                    posts.map((post))=>{   
                        <Product key={post.id} post={post}/>    

                    }   
                }):();                                  
            } 
        </div>
        
    )
}
export default Home;       
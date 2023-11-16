import {FaShoppingCart} from "react-icons/fa";   
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <div className="flex flex-row justify-between">
            <NavLink to="/">   
                   <div>
                   <img src="logo.png"></img>

                    </div>          
            </NavLink>    
            <div>
                <NavLink to="/">
                    <div>
                        <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to="/cart">
                <div><FaShoppingCart/></div>
                </NavLink>          
                
            </div>
            </div>   
                
           
        </div>
    )
}
export default Navbar;     
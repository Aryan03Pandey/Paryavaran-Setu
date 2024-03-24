import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
function NavBar(){
    const [click ,setClick] = useState(false);
    // click ? console.log('hellp' ) : console.log("ccc");
    return (
          
      
        <div className="navbar" >
            <nav className="navigation">
                <img src={logo}alt="logo" />
                <ul className="navlist">
                    <li className="listitem" onClick={()=>setClick(true)}><Link to='/home' className="navlink" >Home</Link></li>
                    <li className="listitem"><Link to='/protips' className="navlink"  onClick={()=>setClick(false)}>Pro Tips</Link></li>
                    <li className="listitem"><Link to='/about' className="navlink"  onClick={()=>setClick(false)}>About Us</Link></li>
                    <li className="listitem"><Link to='/contribute' className="navlink"  onClick={()=>setClick(false)}>Contribute</Link>  </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
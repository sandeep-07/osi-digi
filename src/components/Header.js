import React,{useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import M from 'materialize-css';
import "./Header.css"
import {useHistory,Link} from "react-router-dom"
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);


    
    const logout = () => {
    if (user) {
      auth.signOut();
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {
      'closeOnClick': true,
      'hover':true
  }
    var instances = M.Dropdown.init(elems,options);
  });

  return (
    <div className="navbar-fixed">
      <nav class="grey darken-4">
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo" style={{ textDecoration: 'none' ,color:"white"}}><img src="data:image/png;base64,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" alt="LOGO" style={{height:"50px",padding:"5px",marginBottom:"5px"}} class="circle responsive-img valign profile-image-login"/>GamerEx</Link>
          <ul class="right ">
            <li>
              {user&&<span style={{ textDecoration: 'none' ,color:"#fff",fontWeight:"600",marginRight:"30px"}}>Hello, {user.email}</span>}
              {console.log(user)}
            
            </li>
            <li>
            <Link to="/orders" style={{ textDecoration: 'none' ,color:"#b2ebf2"}}>
              <i class="material-icons left">reorder</i>
              <span style={{color:"white" ,fontWeight:"500"}}>Orders</span></Link>
            </li>
            <li>
              <Link to="/discover" style={{ textDecoration: 'none' ,color:"#b2ebf2"}}>
                  <i class="material-icons left">insert_chart</i>
                    <span style={{color:"white" ,fontWeight:"500"}}>Dicover</span>
              </Link>
            </li>

            <li>
              <Link to="/cart" style={{ textDecoration: 'none' ,color:"#b2ebf2"}}>
                  <i class="material-icons left">shopping_cart</i>
                  <span style={{marginLeft:"-10px",marginRight:"15px"}}>{basket?.length}</span> 
                  <span style={{color:"white" ,fontWeight:"500",marginRight:"15px"}}>Cart</span>
              </Link>
            </li>
            
            <li>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle tag="text">
                  <i className="material-icons">account_circle</i>
                </DropdownToggle>
                <DropdownMenu>
                  {
                  user&&user?
                  <div>
                    <li>
                      <Link to="/contact" style={{ color:"#000" ,textDecoration: 'none' }}>
                        <span style={{fontWeight:"500"}}>
                        Profile
                        </span>
                      </Link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                      <Link style={{textDecoration: 'none' ,color:"000"}}>
                        <span style={{fontWeight:"500"}} onClick={logout}>
                          Sign Out
                        </span>
                      </Link>
                    </li>
                  </div>
                :<div>
                <li>
                <Link to="/login" style={{ background:"black" ,textDecoration: 'none' ,color:"#000"}}>
                  <span style={{color:"aqua" ,fontWeight:"500",padding:"15px 0px"}}>
                  Sign in
                  </span>
                </Link>
                </li>
              </div>}
              </DropdownMenu>
            </Dropdown>
            </li>
            <li style={{color:"white" ,fontWeight:"500",marginRight:"25px"}}>Account</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header

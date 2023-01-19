
import "./NavBar.css";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return(
        <div class="navBar">
            <Link to="/">
                <img alt="logo" src="../images/logoSinFondo.png" width="250px" height="80px"/>
            </Link>
            <ul class="navBarList">
                <li>
                    <NavLink to="/" > Todo </NavLink> 
                </li>
                <li>
                    <NavLink to="/category/men's clothing" > Hombre </NavLink>
                </li>
                <li>
                    <NavLink to="/category/women's clothing" > Mujer </NavLink>
                </li>
                <li>
                    <NavLink to="/category/jewerly" > Joyería </NavLink>
                </li>
                
            </ul>
            <CartWidget/>
        </div>
    );
};

export default NavBar; 
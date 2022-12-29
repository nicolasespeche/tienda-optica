
import "./NavBar.css";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
        <div class="navBar">
            <h1>Optical Store</h1>
            <ul class="navBarList">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <li>
                    <a href="#">Acerca de nosotros</a>
                </li>
            </ul>
            <CartWidget/>
        </div>
    );
};

export default NavBar; 
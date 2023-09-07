import react from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="holder">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Nosotros">Sobre Nosotros</Link></li>
                <li><Link to="/Catalogo">Catalogo</Link></li>
                <li><Link to="/Galeria">Galeria</Link></li>
                <li><Link to="/Eventos">Eventos</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </div>
    );
}
export default Nav;
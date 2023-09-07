import react from "react";
import logo from "../../imagenes/vinoteca-logo-removebg-preview.png";

const Header = (props) => {
    return (
        <header>
        <div className="holder">
            <img src={logo} alt="logo"/>            
        </div>
    </header>
    );
}
export default Header;

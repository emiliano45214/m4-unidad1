import react from "react";
import logo from "../../imagenes/vinoteca-logo-removebg-preview.png";

const Footer = (props) => {
    return (
        <footer>
        <div className="holder">
            <img src={logo} alt="logo-pagina"/>
            <div class="div-info">
                <div class="envios">
                    <h3>Envios</h3>
                    <a href="">completar</a>
                    <a href="">completar</a>
                    <a href="">completar</a>
                </div>
                <div class="info-footer">
                    <h3>Info</h3>
                    <a href="">completar</a>
                    <a href="">completar</a>
                    <a href="">completar</a>
                </div>
                <div class="terminos">
                    <h3>Terminos</h3>
                    <a href="">completar</a>
                    <a href="">completar</a>
                    <a href="">completar</a>
                </div>
            </div>
            <div class="iconos">
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
    </footer>
    );
}
export default Footer;
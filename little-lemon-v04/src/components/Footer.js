import { Link } from 'react-router-dom';
import "../css/footer.css";
import footerLogo from '../assets/footer-logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
            <img src={footerLogo} alt="Litle Lemon food" />
            </div>
            <div className="footer-links">
                <h2>Links</h2>
                <li><Link to="/" className="home">Home</Link></li>
                <li><Link to="/about" className="about">About</Link></li>
                <li><Link to="/menu" className="f-menu">Menu</Link></li>
                <li><Link to="/bookingform" className="reservations">Reservations</Link></li>
                <li><Link to="/orderonline" className="orderOnline">Order Online</Link></li>
                <li><Link to="/login" className="login">Login</Link></li>
            </div>
            <div className="footer-contacts">
                <h2>Contacts</h2>
                <p>Little Lemon <br />813 W Chicago <br />Oakdale Ave Apt 1 <br />Iliinois 60657-5169 <br />USA</p>
            </div>
        </footer>
    );
};

export default Footer;
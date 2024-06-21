import { Link } from "react-router-dom";
import "../css/nav.css";
import logoNavBar from '../assets/logo-nav-bar.png';

const Navbar = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logoNavBar} alt="Litle Lemon nav logo"/>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/bookingform">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/orderonline">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;